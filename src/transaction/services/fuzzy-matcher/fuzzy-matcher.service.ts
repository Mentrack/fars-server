import { Injectable } from '@nestjs/common';
import * as fuzzball from 'fuzzball';
import { OtherMentionsType } from 'src/transaction/types/fuzzy-match.dt';

@Injectable()
export class FuzzyMatcherService {
  // You can keep your Google AI method here if you want to compare
  // ... constructor and findSimilarAppearances() method ...

  // --- START OF NON-AI SOLUTION ---

  /**
   * A dictionary of common abbreviations to their full-word counterparts.
   * This is the "brain" of our rule-based system.
   * You can expand this list as you find more patterns.
   */
  private readonly abbreviationMap = {
    nig: 'nigeria',
    ltd: 'limited',
    co: 'company',
    plc: 'public limited company',
    inc: 'incorporated',
    ent: 'enterprise',
    sol: 'solutions',
    svc: 'services',
    // Add more common abbreviations here
  };

  /**
   * List of common, capitalized words in transactions that are NOT names.
   * This is crucial for filtering noise from our candidate pool.
   */
  private readonly transactionStopWords = new Set([
    'ifo', // In Favour Of
    'from',
    'trf',
    'rev',
    'reversal',
    'nip',
    'ft',
    'payment',
    'chq',
    'ltd',
    'limited',
    'plc',
    'ent',
    'enterprise',
    'nig',
    'nigeria',
    'inc',
    'incorporated',
    'at',
  ]);

  /**
   * Cleans and standardizes text for reliable comparison.
   * @param text The input string.
   * @returns A normalized string.
   */
  private normalizeText(text: string): string {
    let normalized = text.toLowerCase();

    // 1. Remove punctuation (keeps letters, numbers, and spaces)
    normalized = normalized.replace(/[^a-z0-9\s]/g, '');

    // 2. Expand abbreviations using our map
    Object.entries(this.abbreviationMap).forEach(([abbr, full]) => {
      // Use word boundaries (\b) to avoid replacing 'nig' in 'night'
      const regex = new RegExp(`\\b${abbr}\\b`, 'g');
      normalized = normalized.replace(regex, full);
    });

    // 3. Trim extra whitespace
    return normalized.replace(/\s+/g, ' ').trim();
  }

  /**
   * Finds similar appearances of an account name in a description using
   * a local, rule-based fuzzy matching algorithm.
   * @param description The full bank transaction description.
   * @param accountName The target bank account name.
   * @returns An array of similar phrases found in the description.
   */
  async findSimilarAppearances(
    description: string,
    accountNames: string[],
  ): Promise<string[]> {
    const matchNames: string[] = [];
    for (const accountName of accountNames) {
      const normalizedAccountName = this.normalizeText(accountName);
      const descriptionWords = description.split(/\s+/); // Split original by space
      const normalizedDescription = this.normalizeText(description);
      const normalizedDescriptionWords = normalizedDescription.split(' ');

      const accountNameWordCount = normalizedAccountName.split(' ').length;
      const foundMatches = new Set<string>(); // Use a Set to avoid duplicates

      const SIMILARITY_THRESHOLD = 90; // Score from 0-100. Adjust as needed.

      // Sliding window approach
      for (
        let i = 0;
        i <= normalizedDescriptionWords.length - accountNameWordCount;
        i++
      ) {
        // Create a chunk of text from the normalized description
        const windowWords = normalizedDescriptionWords.slice(
          i,
          i + accountNameWordCount,
        );
        const windowText = windowWords.join(' ');

        // Compare the chunk with the normalized account name
        const score = fuzzball.ratio(windowText, normalizedAccountName);

        if (score >= SIMILARITY_THRESHOLD) {
          // We found a match! Now, get the original text.
          const originalPhrase = descriptionWords
            .slice(i, i + accountNameWordCount)
            .join(' ');

          // Add the clean, original phrase to our results
          foundMatches.add(originalPhrase.replace(/[^a-zA-Z0-9\s()]/g, ''));
        }
      }

      matchNames.push(...Array.from(foundMatches));
    }

    return matchNames;
  }

  /**
   * Finds conceptual or partial matches of account names within a description.
   * This version is more flexible and robust against partial names and different word counts.
   *
   * @param description The full bank transaction description.
   * @param accountNames An array of the client's account names to check for.
   * @returns An array of the client's own account names that were found mentioned in the description.
   */
  findSimilarAppearancesV2(
    description: string,
    accountNames: string[],
  ): string[] {
    const foundMatches = new Set<string>();
    const SIMILARITY_THRESHOLD = 85; // Can be a bit lower as this method is flexible

    const normalizedDescription = this.normalizeText(description);

    for (const accountName of accountNames) {
      const normalizedAccountName = this.normalizeText(accountName);

      // No sliding window! We compare the whole string against the whole string.
      // token_set_ratio will find the "best fit" partial match.
      const score = fuzzball.token_set_ratio(
        normalizedAccountName,
        normalizedDescription,
      );

      if (score >= SIMILARITY_THRESHOLD) {
        // If a match is found, we return the original account name from our list
        // that we were checking against. This confirms "one of the client's names was found".
        foundMatches.add(accountName);
      }
    }

    return Array.from(foundMatches);
  }

  /**
   * Checks if a transaction description contains a fuzzy match for any of the provided bank names.
   *
   * @param knownBanks An array of bank names to search for.
   * @param description The transaction description to search within.
   * @returns An object indicating if a match was found and which bank matched.
   */
  isBankMentioned(
    knownBanks: string[],
    description: string,
  ): { found: boolean; matchedBank: string | null } {
    // This threshold can be adjusted. 85-90 is a good starting point.
    const SIMILARITY_THRESHOLD = 90;

    const normalizedDescription = this.normalizeText(description);

    // Loop through each known bank name
    for (const bankName of knownBanks) {
      const normalizedBankName = this.normalizeText(bankName);

      // 'partial_ratio' is perfect here. It finds the best matching substring
      // in the longer string. It's more efficient than our manual sliding window.
      const score = fuzzball.partial_ratio(
        normalizedBankName,
        normalizedDescription,
      );

      // If we find a sufficiently strong match, we can stop and return immediately.
      if (score >= SIMILARITY_THRESHOLD) {
        return {
          found: true,
          matchedBank: bankName, // Return the original, user-provided bank name
        };
      }
    }

    // If we get through the whole loop, no bank was found.
    return {
      found: false,
      matchedBank: null,
    };
  }

  /**
   * Checks if an account name is mentioned in a transaction description using fuzzy matching.
   * This is ideal for detecting self-transfers, reversals, or name-checks.
   *
   * @param accountName The account name to search for.
   * @param description The transaction description to search within.
   * @returns An object with a boolean `found` flag and the similarity `score`.
   */
  isAccountNameMentioned(
    accountName: string,
    description: string,
  ): { found: boolean; score: number } {
    // 90 is a strong threshold. Adjust if you need more or less strictness.
    const SIMILARITY_THRESHOLD = 90;

    const normalizedAccountName = this.normalizeText(accountName);
    const normalizedDescription = this.normalizeText(description);

    // We use `token_set_ratio` here. It's excellent because it tokenizes the strings
    // (splits into words), finds common words, and compares them, ignoring word order
    // and duplication. This makes it very robust for this specific task.
    // E.g., "prince ezeuba agencies" vs "agencies of prince ezeuba" will score high.
    const score = fuzzball.token_set_ratio(
      normalizedAccountName,
      normalizedDescription,
    );

    if (score >= SIMILARITY_THRESHOLD) {
      return { found: true, score };
    }

    return { found: false, score };
  }

  /**
   * Finds potential names in a description that are not the client's own name or a known bank.
   *
   * @param dto - The DTO containing the description and names to exclude.
   * @returns An array of unique names found.
   */
  findOtherClientMentions(dto: OtherMentionsType): {
    found: boolean;
    otherMentions: string[];
  } {
    const { description, clientAccountNames, knownBankNames = [] } = dto;
    const SIMILARITY_THRESHOLD = 85; // A bit more lenient here

    // 1. Pre-process all exclusion names for efficient lookup
    const normalizedClientNames = new Set(
      clientAccountNames.map((name) => this.normalizeText(name)),
    );
    const normalizedBankNames = new Set(
      knownBankNames.map((name) => this.normalizeText(name)),
    );

    // 2. Extract Candidates using a Regular Expression
    // This regex finds sequences of 2 or more capitalized words.
    const nameRegex = /(?:[A-Z][a-zA-Z'-]+[ ]?){2,}/g;
    const rawCandidates = description.match(nameRegex) || [];

    const otherMentions = new Set<string>();

    for (const rawCandidate of rawCandidates) {
      const candidate = rawCandidate.trim();
      const normalizedCandidate = this.normalizeText(candidate);

      // 3. Filtering Pipeline
      // A. Filter out transaction stop words
      if (this.transactionStopWords.has(normalizedCandidate)) {
        continue;
      }

      // B. Filter out known banks
      let isBank = false;
      for (const bank of normalizedBankNames) {
        if (fuzzball.partial_ratio(bank, normalizedCandidate) > 95) {
          isBank = true;
          break;
        }
      }
      if (isBank) {
        continue;
      }

      // C. Filter out client's own names
      let isClient = false;
      for (const clientName of normalizedClientNames) {
        // Use token_set_ratio for robustness against word order
        if (
          fuzzball.token_set_ratio(clientName, normalizedCandidate) >
          SIMILARITY_THRESHOLD
        ) {
          isClient = true;
          break;
        }
      }
      if (isClient) {
        continue;
      }

      // 4. Survivor: This candidate passed all filters
      otherMentions.add(candidate);
    }

    return {
      found: otherMentions.size > 0,
      otherMentions: Array.from(otherMentions),
    };
  }

  /**
   * [V2 - The Correct Implementation]
   * Finds potential names in a description that are not the client's own name or a known bank,
   * using a robust "subtraction" method.
   *
   * @param dto - The DTO containing the description and names to exclude.
   * @returns An object with the results.
   */
  findOtherClientMentionsV2(dto: OtherMentionsType): {
    found: boolean;
    otherMentions: string[];
  } {
    const { description, clientAccountNames, knownBankNames = [] } = dto;
    let sanitizedDescription = ` ${description} `; // Pad with spaces for reliable replacement

    // --- Step 1: Find and Remove the Client's Own Name(s) ---
    // We iterate through the client's known names to find the best match to remove.
    for (const clientName of clientAccountNames) {
      const normalizedClientName = this.normalizeText(clientName);
      const clientNameWords = normalizedClientName.split(' ');

      // Use the flexible token_set_ratio to see if the client is mentioned at all
      const mentionScore = fuzzball.token_set_ratio(
        normalizedClientName,
        this.normalizeText(sanitizedDescription),
      );

      // If the client's name seems to be present...
      if (mentionScore > 80) {
        // ...find the most likely block of text and remove it.
        // We'll remove the individual words of the client's name from the description.
        for (const word of clientNameWords) {
          // Use a regex to replace the word only if it's a whole word.
          const wordRegex = new RegExp(`\\s${word}\\s`, 'gi');
          sanitizedDescription = sanitizedDescription.replace(wordRegex, ' ');
        }
      }
    }

    // --- Step 2: Now, analyze the remainder of the string ---
    const normalizedBankNames = new Set(
      knownBankNames.map((name) => this.normalizeText(name)),
    );

    const nameRegex = /(?:[A-Z][a-zA-Z'-]+[ ]?){2,}/g;
    const rawCandidates = sanitizedDescription.match(nameRegex) || [];

    const otherMentions = new Set<string>();

    for (const rawCandidate of rawCandidates) {
      const candidate = rawCandidate.trim();
      // Skip tiny fragments
      if (candidate.length < 3) continue;

      const normalizedCandidate = this.normalizeText(candidate);

      // Filter out stop words
      if (this.transactionStopWords.has(normalizedCandidate)) {
        continue;
      }

      // Filter out known banks
      let isBank = false;
      for (const bank of normalizedBankNames) {
        if (fuzzball.partial_ratio(bank, normalizedCandidate) > 95) {
          isBank = true;
          break;
        }
      }
      if (isBank) {
        continue;
      }

      // Survivor: This candidate passed all filters
      otherMentions.add(candidate);
    }

    return {
      found: otherMentions.size > 0,
      otherMentions: Array.from(otherMentions),
    };
  }

  /**
   * Helper function needed for V2 logic. This is your original sliding window function.
   * Ensure this exists in your service.
   */
  private findSimilarAppearancesV3(
    description: string,
    accountNames: string[],
  ): string[] {
    const allMatches = new Set<string>();
    for (const accountName of accountNames) {
      const normalizedAccountName = this.normalizeText(accountName);
      const descriptionWords = description.split(/\s+/);
      const normalizedDescriptionWords =
        this.normalizeText(description).split(' ');
      const accountNameWordCount = normalizedAccountName.split(' ').length;
      const SIMILARITY_THRESHOLD = 90;

      for (
        let i = 0;
        i <= normalizedDescriptionWords.length - accountNameWordCount;
        i++
      ) {
        const windowText = normalizedDescriptionWords
          .slice(i, i + accountNameWordCount)
          .join(' ');
        if (
          fuzzball.ratio(windowText, normalizedAccountName) >=
          SIMILARITY_THRESHOLD
        ) {
          const originalPhrase = descriptionWords
            .slice(i, i + accountNameWordCount)
            .join(' ');
          allMatches.add(originalPhrase.replace(/[^a-zA-Z0-9\s()]/g, ''));
        }
      }
    }
    return Array.from(allMatches);
  }
}
