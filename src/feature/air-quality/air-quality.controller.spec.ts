import { TestBed } from '@automock/jest';
import { AirQualityController } from './air-quality.controller';

describe('AirQualityController', () => {
  let controller: AirQualityController;

  beforeEach(async () => {
    const { unit } = TestBed.create(AirQualityController).compile();

    controller = unit;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
