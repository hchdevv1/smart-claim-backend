import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CheckEligibleService } from './check-eligible.service';
//import { CreateCheckEligibleDto } from './dto/create-check-eligible.dto';
//import { UpdateCheckEligibleDto } from './dto/update-check-eligible.dto';
import {AccessTokenDTO} from '../dto/aia.dto';


@Controller('/aia/eligible')
export class CheckEligibleController {
  constructor(private readonly checkEligibleService: CheckEligibleService) {}

 
 

  @Get('/aa')
  findAll() {
     //return 'OOO'
    return this.checkEligibleService.Eligible();
  }

  
  @Get('/episodelist/:PID/:EpiDate/:EpiType')
  episodelist(@Param('PID') PID: string,@Param('EpiDate') EpiDate: string,@Param('EpiType') EpiType: string) {
    return this.checkEligibleService.episodelist(PID,EpiDate,EpiType);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkEligibleService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkEligibleService.remove(+id);
  }
}
