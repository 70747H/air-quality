import { Controller, Post, Body, Get } from '@nestjs/common';
import { AirQualityService } from './air-quality.service';
import { IqairService } from '../../service/iqair/iqair.service';
import { GetNearestCityDataDto } from './dto/get-nearest-city-data.dto';
import { IqairApiResponse } from '../../service/iqair/interface/iqair-response.interface';
import { IqairApiResponseMapper } from '../../service/iqair/mapper/iqair.mapper';
import { MostPolluted } from './most-polluted.interface';

@Controller('air-quality')
export class AirQualityController {
  constructor(
    private readonly airQualityService: AirQualityService,
    private readonly iqairService: IqairService,
  ) {}

  @Post('nearest-city')
  async findNearestCityIqair(
    @Body() getNearestCityDataDto: GetNearestCityDataDto,
  ) {
    const nearestCityData: IqairApiResponse =
      await this.iqairService.findNearestCityIqair(getNearestCityDataDto);

    return IqairApiResponseMapper.toDomain(nearestCityData);
  }

  @Get('most-polluted')
  async findMostPolluted() {
    const mostPollutedData: MostPolluted =
      await this.airQualityService.mostPolluted();

    return mostPollutedData.airQuality_pollution_ts;
  }
}
