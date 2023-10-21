import { Module } from '@nestjs/common';
import { IqairService } from './iqair.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [IqairService],
  exports: [IqairService],
})
export class IqairModule {}
