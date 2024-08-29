import { Injectable } from '@nestjs/common';

@Injectable()
export class BillingService {
 
  findAll() {
    return `This action returns all billing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} billing`;
  }

  

  remove(id: number) {
    return `This action removes a #${id} billing`;
  }
}
