import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CheckEligibleModule} from './AIA/check-eligible/check-eligible.module'
@Module({
  imports: [CheckEligibleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
