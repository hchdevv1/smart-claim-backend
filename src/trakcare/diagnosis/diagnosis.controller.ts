import { Controller, Get, Param } from '@nestjs/common';
import { DiagnosisService } from './diagnosis.service';

@Controller('diagnosis')
export class DiagnosisController {
  constructor(private readonly diagnosisService: DiagnosisService) {}

 
   
  @Get('/byEpisode/:episodeNumber')
  getVitalSign(@Param('episodeNumber') episodeNumber: string) {
     return this.diagnosisService.getDiagnosis(episodeNumber);
  }

}


