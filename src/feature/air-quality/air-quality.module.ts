import { Module } from '@nestjs/common';
import { AirQualityService } from './air-quality.service';
import { AirQualityController } from './air-quality.controller';
import { IqairModule } from '../../service/iqair/iqair.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirQuality } from './entities/air-quality.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AirQuality]), IqairModule],
  controllers: [AirQualityController],
  providers: [AirQualityService],
})
export class AirQualityModule {}
