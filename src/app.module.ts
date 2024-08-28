import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CheckEligibleModule} from './AIA/check-eligible/check-eligible.module';
import { UtilsModule} from './utilities/utils/utils.module';
@Module({
  imports: [CheckEligibleModule,UtilsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
