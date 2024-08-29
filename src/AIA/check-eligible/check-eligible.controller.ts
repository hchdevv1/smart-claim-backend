
import { Controller, Get,  Param, Post ,Body} from '@nestjs/common';
//import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CheckEligibleService } from './check-eligible.service';
//import { CreateCheckEligibleDto } from './dto/create-check-eligible.dto';
//import { UpdateCheckEligibleDto } from './dto/update-check-eligible.dto';
//import {AccessTokenDTO} from '../dto/aia.dto';
import { Eligible} from './dto/eligible.dto'
import { checkEligibleHCHDto } from './dto/check-eligibleHCH.dto'

@Controller('/aia/eligible')
export class CheckEligibleController {
  constructor(private readonly checkEligibleService: CheckEligibleService) {}


  @Get('/aa')
  findAll() {
     return 'OOO'
    //return this.checkEligibleService.Eligible();
    //return this.checkEligibleService.EncryptAESECB('11750');
    
  }

  
  @Get('/episodelist/:PID/:EpiDate/:EpiType')
  episodelist(@Param('PID') PID: string,@Param('EpiDate') EpiDate: string,@Param('EpiType') EpiType: string) {
    return this.checkEligibleService.episodelist(PID,EpiDate,EpiType);
  }

  @Post()
  async create(@Body() checkEligibleDto: Eligible){
    if (checkEligibleDto.DataJson.Visit.VN !=undefined){
      if ((checkEligibleDto.DataJson.IdType !=undefined)&& 
          (checkEligibleDto.DataJson.PID != undefined)&&
          (checkEligibleDto.DataJson.PolicyType != undefined)&&
          (checkEligibleDto.DataJson.ServiceSetting != undefined)&&
          (checkEligibleDto.DataJson.SurgeryType != undefined)){
          const dataEligible = this.checkEligibleService.create(checkEligibleDto);
         console.log(dataEligible)
          return dataEligible
    }
      }else{ }      
  }
  @Get('/checkeligible')
  checkeligibleAIA() {
     return 'OOO'
    //return this.checkEligibleService.checkEligible();
    //return this.checkEligibleService.EncryptAESECB('11750');
    
  }
  @Post('/checkeligible')
  async checkeligible(@Body() CheckEligibleHCHDto: checkEligibleHCHDto){
    if (CheckEligibleHCHDto.DataJson.Visit.VN !=undefined){
      if ((CheckEligibleHCHDto.DataJson.IdType !=undefined)&& 
          (CheckEligibleHCHDto.DataJson.PID != undefined)&&
          (CheckEligibleHCHDto.DataJson.PolicyType != undefined)&&
          (CheckEligibleHCHDto.DataJson.ServiceSetting != undefined)&&
          (CheckEligibleHCHDto.DataJson.SurgeryType != undefined)){
          const dataEligible = this.checkEligibleService.checkEligible(CheckEligibleHCHDto);
        // console.log(dataEligible)
          return dataEligible
    }
      }     
  }

  @Get('/createtran')
  findClaimTransection() {
    
     return 'OOO'
    //return this.checkEligibleService.Eligible();
    //return this.checkEligibleService.EncryptAESECB('11750');
    
  }

}
