import { Injectable } from '@nestjs/common';
import { prismaProgest } from './database/database';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async AAA() {
    return await prismaProgest.policyType.findMany();
  }
}
