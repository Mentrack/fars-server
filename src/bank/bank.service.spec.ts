import { BankService } from './bank.service';
import { DatabaseService } from 'src/database/database.service';

describe('BankService', () => {
  describe('findAll', () => {
    it('returns banks sorted by name A–Z', async () => {
      const findMany = jest.fn().mockResolvedValue([]);
      const db = { bank: { findMany } } as unknown as DatabaseService;
      const service = new BankService(db);

      await service.findAll();

      expect(findMany).toHaveBeenCalledWith(
        expect.objectContaining({ orderBy: { name: 'asc' } }),
      );
    });
  });
});
