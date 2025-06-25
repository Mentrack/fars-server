import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import * as stringSimilarity from 'string-similarity';

@Injectable()
export class ReconstructorService {
  constructor(private readonly databaseService: DatabaseService) {}

  /**
   * Reconstructs transactions into pairs based on various criteria.
   * @param cleanedRows - Array of cleaned transaction rows.
   * @param daysWindow - Maximum days difference to consider for pairing.
   * @returns Promise resolving to an array of reconstructed transaction rows.
   */

  async reconstruct(
    bankId: string,
    cleanedRows: any[],
    daysWindow = 30,
  ): Promise<any[]> {
    const keywordRecords = await this.databaseService.reversalKeyword.findMany({
      where: {
        OR: [{ isGlobal: true }, { bankId }],
      },
    });

    const reversalKeywords = keywordRecords.map((record) => record.keyword);

    const rows = [...cleanedRows];
    const used = new Set<any>(); // Track *actual row references*, not just indexes
    let pairCounter = 0;

    // First, extract references for all rows
    for (const row of rows) {
      row.extractedReference = this.extractReference(row.description);
    }

    for (let i = 0; i < rows.length; i++) {
      const txA = rows[i];
      if (used.has(txA)) continue;

      for (let j = i + 1; j < rows.length; j++) {
        const txB = rows[j];
        if (used.has(txB)) continue;

        if (txA.type === txB.type) continue;
        if (Math.abs(txA.amount - txB.amount) > 0.01) continue;

        const daysDiff = this.getDateDiffInDays(
          txA.transactionDate,
          txB.transactionDate,
        );
        if (daysDiff > daysWindow) continue;

        const [creditRow, debitRow] =
          txA.type.toLowerCase() === 'credit' ? [txA, txB] : [txB, txA];

        const refA = this.extractReference(debitRow.description);
        const refB = this.extractReference(creditRow.description);

        // Priority 1: Exact reference match
        if (refA && refB && refA === refB) {
          this.markReversalPair(debitRow, creditRow, ++pairCounter);
          used.add(debitRow);
          used.add(creditRow);
          this.reorder(rows, debitRow, creditRow);
          break;
        }

        // Priority 2: Credit contains keyword
        if (
          this.containsReversalKeyword(creditRow.description, reversalKeywords)
        ) {
          this.markReversalPair(debitRow, creditRow, ++pairCounter);
          used.add(debitRow);
          used.add(creditRow);
          this.reorder(rows, debitRow, creditRow);
          break;
        }

        // Priority 3: Similar description and no ref mismatch
        const similar = this.isSimilarDescription(
          debitRow.description,
          creditRow.description,
        );
        if (!similar) continue;

        if ((!refA && !refB) || (refA && refB && refA === refB)) {
          this.markReversalPair(debitRow, creditRow, ++pairCounter);
          used.add(debitRow);
          used.add(creditRow);
          this.reorder(rows, debitRow, creditRow);
          break;
        }
      }
    }

    return rows;
  }

  private containsReversalKeyword(
    description: string,
    reversalKeywords: string[],
  ): boolean {
    const desc = description.toUpperCase();
    return reversalKeywords.some((keyword) => desc.includes(keyword));
  }

  private isSimilarDescription(a: string, b: string): boolean {
    const sim = stringSimilarity.compareTwoStrings(
      a.toLowerCase(),
      b.toLowerCase(),
    );
    return sim > 0.75; // adjust threshold as needed
  }

  private extractReference(description: string): string | null {
    if (!description) return null;

    // 1. Match long numeric references (8–20 digits)
    const longNumericMatch = description.match(/\d{8,20}/g);
    if (longNumericMatch && longNumericMatch.length > 0) {
      return longNumericMatch[longNumericMatch.length - 1]; // last match is usually most specific
    }

    // 2. Match patterns like Ref09052018M373087
    const refMatch = description.match(/Ref\d{6,}[A-Z0-9]*/i);
    if (refMatch) {
      return refMatch[0];
    }

    // 3. Match alphanumeric codes like M273276 or 273276M
    const alphanumMatch = description.match(/\b[A-Z]*\d{4,}[A-Z]*\b/i);
    if (alphanumMatch) {
      return alphanumMatch[0];
    }

    return null;
  }

  private markReversalPair(rowA: any, rowB: any, pairIndex: number) {
    if (rowA.isReversal || rowB.isReversal) {
      throw new Error('Attempting to reuse an already paired transaction');
    }

    rowA.isReversal = true;
    rowB.isReversal = true;
    rowA.reversalPairIndex = pairIndex;
    rowB.reversalPairIndex = pairIndex;

    rowB.valueDate = rowA.valueDate;
  }

  private reorder(rows: any[], debitRow: any, creditRow: any) {
    const debitIndex = rows.indexOf(debitRow);
    const creditIndex = rows.indexOf(creditRow);
    if (creditIndex === debitIndex + 1) return;

    const creditRemoved = rows.splice(creditIndex, 1)[0];
    const insertIndex = debitIndex < creditIndex ? debitIndex + 1 : debitIndex;
    rows.splice(insertIndex, 0, creditRemoved);
  }

  private getDateDiffInDays(dateA: string, dateB: string): number {
    const d1 = new Date(dateA).getTime();
    const d2 = new Date(dateB).getTime();
    return Math.abs((d1 - d2) / (1000 * 3600 * 24));
  }
}
