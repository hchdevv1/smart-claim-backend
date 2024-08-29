import { Controller, Get, Param, Delete } from '@nestjs/common';
import { BillingService } from './billing.service';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

 
  @Get()
  findAll() {
    return this.billingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billingService.findOne(+id);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billingService.remove(+id);
  }
}
