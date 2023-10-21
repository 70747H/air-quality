import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { IqairService } from '../../service/iqair/iqair.service';
import { GetNearestCityDataDto } from './dto/get-nearest-city-data.dto';
import { IqairApiResponseMapper } from '../../service/iqair/mapper/iqair.mapper';
import { IqairApiResponse } from '../../service/iqair/interface/iqair-response.interface';
import { Repository } from 'typeorm';
import { AirQuality } from './entities/air-quality.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MostPolluted } from './most-polluted.interface';

const CRON_LAT = 48.856613;
const CRON_LON = 2.352222;

@Injectable()
export class AirQualityService {
  private readonly logger = new Logger(AirQualityService.name);

  constructor(
    private readonly iqairService: IqairService,
    @InjectRepository(AirQuality)
    private readonly airQualityRepository: Repository<AirQuality>,
  ) {}

  async mostPolluted(): Promise<MostPolluted> {
    return await this.airQualityRepository
      .createQueryBuilder('airQuality')
      .select('MAX((airQuality.pollution_aqius))')
      .addSelect('airQuality.pollution_ts')
      .groupBy('airQuality.pollution_ts')
      .getRawOne();
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  // async handleCron() {
  //   const airQualityData: IqairApiResponse =
  //     await this.iqairService.findNearestCityIqair({
  //       latitude: CRON_LAT,
  //       longitude: CRON_LON,
  //     } as GetNearestCityDataDto);

  //   this.airQualityRepository.insert(
  //     IqairApiResponseMapper.toPersistance(airQualityData),
  //   );
  //   this.logger.log(
  //     'CRON: paris pollution data: ',
  //     JSON.stringify(airQualityData.data.current.pollution),
  //   );
  // }
}
