import { Module } from '@nestjs/common';
import { CheckEligibleService } from './check-eligible.service';
import { CheckEligibleController } from './check-eligible.controller';
import {HttpModule} from '@nestjs/axios'

@Module({
  imports:[HttpModule],
  controllers: [CheckEligibleController],
  providers: [CheckEligibleService],
})
export class CheckEligibleModule {}
