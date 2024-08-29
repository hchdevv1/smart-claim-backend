import { Module } from '@nestjs/common';
import { VitalsignService } from './vitalsign.service';
import { VitalsignController } from './vitalsign.controller';
import {HttpModule} from '@nestjs/axios'

@Module({
  imports:[HttpModule],
  controllers: [VitalsignController],
  providers: [VitalsignService],
})
export class VitalsignModule {}
