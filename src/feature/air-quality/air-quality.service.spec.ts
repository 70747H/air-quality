import { TestBed } from '@automock/jest';

import { AirQualityService } from './air-quality.service';
import { AirQuality } from './entities/air-quality.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const mockRepository = {
  createQueryBuilder: jest.fn().mockReturnValue({
    select: jest.fn().mockReturnThis(),
    addSelect: jest.fn().mockReturnThis(),
    groupBy: jest.fn().mockReturnThis(),
    getRawOne: jest
      .fn()
      .mockReturnValue({ airQuality_pollution_ts: '2023-10-20T16:00:00.000Z' }),
  }),
};

describe('AirQualityService', () => {
  let service: AirQualityService;
  let airQualityRepository: MockRepository<AirQuality>;

  beforeEach(async () => {
    const { unit, unitRef } = TestBed.create(AirQualityService)
      .mock(getRepositoryToken(AirQuality) as string)
      .using(mockRepository)
      .compile();
    service = unit;
    airQualityRepository = unitRef.get(
      getRepositoryToken(AirQuality) as string,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('AirQualityService.mostPolluted', () => {
    it('should return datetime of most polluted in paris', async () => {
      const data = await service.mostPolluted();
      expect(data).toEqual({
        airQuality_pollution_ts: '2023-10-20T16:00:00.000Z',
      });
    });
  });
});
