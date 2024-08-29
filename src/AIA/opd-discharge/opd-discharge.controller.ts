import { Controller, Get, Param } from '@nestjs/common';
import { OpdDischargeService } from './opd-discharge.service';

@Controller('/aia/opd-discharge')
export class OpdDischargeController {
  constructor(private readonly opdDischargeService: OpdDischargeService) {}

  
  @Get('/vitalsignByEpisode/:episodeNumber')
  getVitalSign(@Param('episodeNumber') episodeNumber: string) {
     return this.opdDischargeService.setVitalSign(episodeNumber);
  }

  @Get('/DiagnosisbyBpisode/:episodeNumber')
  getDiagnosis(@Param('episodeNumber') episodeNumber: string) {
     return this.opdDischargeService.setDiagnosis(episodeNumber);
  }


 
}
