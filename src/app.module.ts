import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CheckEligibleModule } from './aia/check-eligible/check-eligible.module';
import { UtilsModule } from './utilities/utils/utils.module';
import { OpdDischargeModule } from './aia/opd-discharge/opd-discharge.module';
import { VitalsignModule } from './trakcare/vitalsign/vitalsign.module';
import { DiagnosisModule } from './trakcare/diagnosis/diagnosis.module'
@Module({
  imports: [CheckEligibleModule,UtilsModule,OpdDischargeModule,VitalsignModule, DiagnosisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
