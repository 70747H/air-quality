import { TestBed } from '@automock/jest';
import { IqairService } from './iqair.service';
import { ConfigService } from '@nestjs/config';
import { GetNearestCityDataDto } from '../../feature/air-quality/dto/get-nearest-city-data.dto';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

describe('IqairService', () => {
  let service: IqairService;
  let configService: jest.Mocked<ConfigService>;
  let httpService: jest.Mocked<HttpService>;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(IqairService)
      .mock(HttpService)
      .using({ get: jest.fn() })
      .compile();
    service = unit;
    configService = unitRef.get(ConfigService);
    httpService = unitRef.get(HttpService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('IqairService.findNearestCityIqair', () => {
    it('It should call Iqair nearest_city endpoint', async () => {
      configService.get.mockReturnValueOnce({
        url: 'http://fake.com',
        apiKey: 'fake-9620-4dd1-9b9c-3abdfd88b788',
      });
      httpService.get.mockImplementationOnce(
        () =>
          new Observable((subscriber) => subscriber.next({} as AxiosResponse)),
      );
      await service.findNearestCityIqair({} as GetNearestCityDataDto);
      expect(configService.get).toBeCalledWith('iqair');
      expect(httpService.get).toBeCalledTimes(1);
    });
  });
});
