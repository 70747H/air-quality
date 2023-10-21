import { PartialType } from '@nestjs/swagger';
import { CreateAirQualityDto } from './create-air-quality.dto';

export class UpdateAirQualityDto extends PartialType(CreateAirQualityDto) {}
