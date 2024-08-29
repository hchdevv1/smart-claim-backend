import { Module } from '@nestjs/common';
import {HttpModule} from '@nestjs/axios'
import { OpdDischargeService } from './opd-discharge.service';
import { OpdDischargeController } from './opd-discharge.controller';
import { VitalsignService } from '../../trakcare/vitalsign/vitalsign.service';


@Module({
  imports:[HttpModule],
  controllers: [OpdDischargeController],
  providers: [OpdDischargeService,VitalsignService],
})
export class OpdDischargeModule {}


