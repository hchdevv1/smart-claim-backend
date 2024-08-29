import { Controller, Get, Param } from '@nestjs/common';
import { VitalsignService } from './vitalsign.service';


@Controller('/trakcare/vitalsign')
export class VitalsignController {
  constructor(private readonly vitalsignService: VitalsignService) {}


 
  
  @Get('/byEpisode/:episodeNumber')
  getVitalSign(@Param('episodeNumber') episodeNumber: string) {
     return this.vitalsignService.getVitalSign(episodeNumber);
  }


}
