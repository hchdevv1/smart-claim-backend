import { Injectable  } from '@nestjs/common';
import { prismaProgest } from '../../database/databse';


@Injectable()
export class UtilsService {

  async IllnessType(id: string ) {

    const myNumber:number = parseInt(id);

    return await prismaProgest.illnessType.findMany({ where: {InsurerCode: myNumber}}     
    )
       
  }
  async IllnessSurgery(InsuranceCode: string) {
    const myNumber:number = parseInt(InsuranceCode);
    return await prismaProgest.illnessSurgery.findMany({ where: {InsurerCode: myNumber}}
    )
  }
  async policyType(InsuranceCode: string) {
    const myNumber:number = parseInt(InsuranceCode);
    return await prismaProgest.policyType.findMany({ where: {InsurerCode: myNumber}}
      )
       
  }
}
