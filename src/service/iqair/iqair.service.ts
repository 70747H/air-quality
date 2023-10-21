import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { GetNearestCityDataDto } from '../../feature/air-quality/dto/get-nearest-city-data.dto';
import { IqairApiResponse } from './interface/iqair-response.interface';

@Injectable()
export class IqairService {
  private readonly logger = new Logger(IqairService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async findNearestCityIqair(
    getNearestCityDatDto: GetNearestCityDataDto,
  ): Promise<IqairApiResponse> {
    const { url, apiKey } = this.configService.get('iqair');
    const { latitude, longitude } = getNearestCityDatDto;
    const { data } = await firstValueFrom(
      this.httpService
        .get<IqairApiResponse>(
          `${url}/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${apiKey}`,
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }
}
