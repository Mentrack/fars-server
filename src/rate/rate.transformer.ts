import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';

export function transformRateDtoToPrismaPayload(
  dto: CreateRateDto | UpdateRateDto,
) {
  const rawPayload = {
    clientId: dto.clientId,
    drRates: dto.drRates ? JSON.parse(JSON.stringify(dto.drRates)) : undefined,
    loanInterestRates: dto.loanInterestRates
      ? JSON.parse(JSON.stringify(dto.loanInterestRates))
      : undefined,
    lcCommissions: dto.lcCommissions
      ? JSON.parse(JSON.stringify(dto.lcCommissions))
      : undefined,
    preNegotiationRates: dto.preNegotiationRates
      ? JSON.parse(JSON.stringify(dto.preNegotiationRates))
      : undefined,
    postNegotiationRates: dto.postNegotiationRates
      ? JSON.parse(JSON.stringify(dto.postNegotiationRates))
      : undefined,
    creditInterestRates: dto.creditInterestRates
      ? JSON.parse(JSON.stringify(dto.creditInterestRates))
      : undefined,
    returnChargeRate: dto.returnChargeRate,
    returnChargeLimit: dto.returnChargeLimit,
    cotCovenantRate: dto.cotCovenantRate,
    cotOffCoverRate: dto.cotOffCoverRate,
    cotOICRate: dto.cotOICRate,
    turnoverLimit: dto.turnoverLimit,
    cotCovenantFrequency: dto.cotCovenantFrequency,
    chargeCOTOnShortfall: dto.chargeCOTOnShortfall,
    debitRate: dto.debitRate,
    excessRate: dto.excessRate,
    excessRateType: dto.excessRateType,
    vatRate: dto.vatRate,
    whtRate: dto.whtRate,
    rateType: dto.rateType,
    currency: dto.currency,
    effectiveFrom: dto.effectiveFrom ? new Date(dto.effectiveFrom) : undefined,
    effectiveTo: dto.effectiveTo ? new Date(dto.effectiveTo) : undefined,
  };

  // Remove keys with undefined values
  return Object.fromEntries(
    Object.entries(rawPayload).filter(([_, v]) => v !== undefined),
  );
}
