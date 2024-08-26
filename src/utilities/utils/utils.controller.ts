import { Controller, Get, Param } from '@nestjs/common';
import { UtilsService} from './utils.service';
@Controller('/api/V1/utils')
export class UtilsController {
  constructor(private readonly utilsService: UtilsService) {}

  // http://localhost:3011/api/V1/utils/IllnessType/13
 
  @Get('/IllnessType/:InsuranceCode')
  getIllnessType(@Param('InsuranceCode') InsuranceCode: string ) {
    return  this.utilsService.IllnessType(InsuranceCode)
  }
  @Get('/IllnessSurgery/:InsuranceCode')
  getIllnessSurgery(@Param('InsuranceCode') InsuranceCode: string ) {
    return  this.utilsService.IllnessSurgery(InsuranceCode)
  }

  @Get('/policyType/:InsuranceCode')
  getpolicyType(@Param('InsuranceCode') InsuranceCode: string ) {
    return  this.utilsService.policyType(InsuranceCode)
  }
}
