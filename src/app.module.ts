import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleOptions } from '../orm.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from './config/confguration';
import { validate } from './config/env.validation';
import { AirQualityModule } from './feature/air-quality/air-quality.module';
import { IqairModule } from './service/iqair/iqair.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...typeOrmModuleOptions,
      }),
    }),
    ScheduleModule.forRoot(),
    AirQualityModule,
    IqairModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
