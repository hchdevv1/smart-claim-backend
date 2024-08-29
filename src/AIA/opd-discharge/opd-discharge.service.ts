import { Injectable } from '@nestjs/common';


import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

const Trakcare_APIURL= process.env.TRAKCARE_APIURL;
//import { HttpService } from '@nestjs/axios';
// import { firstValueFrom } from 'rxjs';

@Injectable()
export class OpdDischargeService {

constructor(private readonly httpService: HttpService ) {}
  //constructor (private readonly vitalsignService:VitalsignService){}


async setDiagnosis(episodeNumber :string): Promise<any> {
  try {
    const response = await firstValueFrom(
      this.httpService.get(`${Trakcare_APIURL}/getDiagnosisByEpisode/${episodeNumber}`)
    );
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error('Error fetching data:', error.message);
    throw new Error('Failed to fetch data from external API');
  }
}


async setVitalSign(episodeNumber :string): Promise<any> {
  try {
    const response = await firstValueFrom(
      this.httpService.get(`${Trakcare_APIURL}/getVitalSignByEpisode/${episodeNumber}`)
    );
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error('Error fetching data:', error.message);
    throw new Error('Failed to fetch data from external API');
  }
}

  // async setVitalSign(episodeNumber :string) {

  //   newTrakcareOpdDischargeDto = new TrakcareOpdDischargeDto();
    
  //   const response = await this.vitalsignService.getVitalSign(episodeNumber);

  //   // return response.VitalSign.map(item => new newTrakcareOpdDischargeDto({
  //   //   Cnt: item.Cnt,
  //   //   DiastolicBp: item.DiastolicBp,
  //   //   HeartRate: item.HeartRate,
  //   //   OxygenSaturation: item.OxygenSaturation,
  //   //   PainScore: item.PainScore,
  //   //   RespiratoryRate: item.RespiratoryRate,
  //   //   SystolicBp: item.SystolicBp,
  //   //   Temperature: item.Temperature,
  //   //   VitalSignEntryDateTime: item.VitalSignEntryDateTime
  //   // }));
    
  //   // response.VitalSign.forEach((item, index) => {
  //   //   new newTrakcareOpdDischargeDto({
  //   //       Cnt: item.Cnt,
  //   //       DiastolicBp: item.DiastolicBp,
  //   //       HeartRate: item.HeartRate,
  //   //       OxygenSaturation: item.OxygenSaturation,
  //   //       PainScore: item.PainScore,
  //   //       RespiratoryRate: item.RespiratoryRate,
  //   //       SystolicBp: item.SystolicBp,
  //   //       Temperature: item.Temperature,
  //   //       VitalSignEntryDateTime: item.VitalSignEntryDateTime
  //   //     })
  //     // newTrakcareOpdDischargeDto.Temperature=response.VitalSign[index].Temperature
  //     // console.log(response.VitalSign[index].Cnt)
  //  // });
  //   // if (Array.isArray(response.VitalSign)) {
  //   //   response.forEach(item => {
  //   //     newTrakcareOpdDischargeDto.index =item
  //   //     // ทำงานกับแต่ละ item
  //   //    // console.log('Temperature:', item.Temperature);
  //   //   });
  //   // } 


  //  // response.data.Data.CoverageList.forEach((item, index) => {
  //     //ResponecheckEligible =item
  //    // console.log(`Value at position ${index}:`, item);
  //   // console.log(response.data.Data.CoverageList[index].Type)
  //    //console.log(response.data.Data.CoverageList[index].Status)
  //  //  console.log(response.data.Data.CoverageList[index].MessageList)
  //  //});


  //  return response
  // }


//    setVitalSign(episodeNumber :string): void {
//     let temperatures ;
//     this.vitalsignService.getVitalSign(episodeNumber)
//     .then((response: any) => {
//       // ตรวจสอบว่า response มีฟิลด์ VitalSign และเป็นอาเรย์
//       if (Array.isArray(response.VitalSign)) {
//        temperatures = response.VitalSign.map((item: any) => 
//         item.VitalSignEntryDateTime,
//         //Temperature
      
//       );
//         console.log(temperatures);
//         return  temperatures ;
//       } else {
//         console.error('VitalSign is not an array:', response.VitalSign);
//       }
//     })
//     .catch((error) => {
//       console.error('Error fetching vital signs:', error);
//     });

//     // try {
//     //   //const response = await this.vitalsignService.getVitalSign(episodeNumber);
//     //    this.vitalsignService.getVitalSign(episodeNumber)
//     //   .then((response:any =>{

//     //     const temperatures = response.map((item: any) => item.Temperature);
//     //     console.log(temperatures);
//     //   })
     
//     // } catch (error) {
//     //   console.error('Error fetching vital signs:', error);
//     // }



//  // const trakcerVitalsignService  = new TrakcareVitalSignDto(); 
//     //  const aaaaaa= await this.vitalsignService.getVitalSign(episodeNumber);
//  //onst ObjvitalsignService =this.vitalsignService.getVitalSign(episodeNumber);
//     // const temperatures = aaaaaa.map(item => item.Temperature);

//    //'vn'+episodeNumber
//   }





}
