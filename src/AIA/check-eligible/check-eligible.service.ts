import { Injectable, ForbiddenException } from '@nestjs/common';
//import { CreateCheckEligibleDto } from './dto/create-check-eligible.dto';
//import { UpdateCheckEligibleDto } from './dto/update-check-eligible.dto';
import axios from 'axios';
import {HttpService} from '@nestjs/axios'
import {map,catchError} from 'rxjs'
import { Eligible } from './dto/eligible.dto';
import { checkeligibleDto} from './dto/check-eligibleAIA.dto'
import { checkEligibleHCHDto } from './dto/check-eligibleHCH.dto'
import { prismaProgest } from '../../database/database'
import { UtilsService } from '../../utilities/utils/utils.service'


//import { AccessTokenAIA } from '../../utilities/utils/dto/accessToken'
//import  aesEcb  from 'aes-ecb';

const AIA_APIURL= process.env.AIA_APIURL;
//const API_CONTENTTYPE= process.env.API_CONTENTTYPE;
//const AIA_APISecretkey = process.env.AIA_APISecretkey
const AIA_APISubscription = process.env.AIA_APISubscription
// const AIA_APIMUserId = process.env.AIA_APIMUserId
// const AIA_APIMAppId = [process.env.AIA_APIMAppId]

// class AccessTokenAIA {
//   tokenKey: string;
//   tokenstatus: string;
// }
const Utils  = new UtilsService(); 

@Injectable()
export class CheckEligibleService {
  constructor (private http: HttpService){}
// async requestAccessToken(){
//   const apiURL= `${AIA_APIURL}/TokenManager/requestAccessToken`;
//   try  {
//     await axios.post(apiURL, { userId: AIA_APIMUserId , appId: AIA_APIMAppId},{
//       headers:{
//         'Content-Type': API_CONTENTTYPE ,
//         'Ocp-Apim-Subscription-Key':AIA_APISubscription,
//       },
//     }).then((response)=>{
//       accessTokenAIA.tokenKey =response.data.accessTokenInfo.accessToken;
//       accessTokenAIA.tokenstatus =response.data.statusCode
//     })
//    }catch{}
// console.log(accessTokenAIA)
// return  accessTokenAIA;
// }
// EncryptAESECB(text:string):string{
//   const Secretkey = AIA_APISecretkey;
//   const encryptText = aesEcb.encrypt(Secretkey,text)
//   return encryptText;
// }



 async checkEligible(CheckEligibleHCHDto:checkEligibleHCHDto){
  
 
  const ObjAccessToken = Utils.requestAccessToken();
  const AccessTokenKey =  (await ObjAccessToken).tokenKey;
  //console.log(AccessTokenKey);
  const ency = Utils.EncryptAESECB('11750');
  //console.log(ency);

  //const newCheckeligibleDto =new checkEligibleHCHDto()
 //newCheckeligibleDto.RefId
  const HN  =CheckEligibleHCHDto.DataJson.Patient.HN;
  const VN  =CheckEligibleHCHDto.DataJson.Visit.VN;
  const PolicyTypeCode =CheckEligibleHCHDto.DataJson.PolicyTypeCode;
  const ServiceSettingCode =CheckEligibleHCHDto.DataJson.ServiceSettingCode;

  const RefIdHCH =VN.replace("-","")+'-'+PolicyTypeCode+'-'+ServiceSettingCode
  console.log(RefIdHCH);
  const RefIdHCHEncrypt  =Utils.EncryptAESECB(RefIdHCH);

  //const resultx =await prismaProgest.claimTransection.findUnique({ where: {RefId: `${RefIdHCHEncrypt}`);
    const resultx = await prismaProgest.claimTransection.findUnique({
      where: {
        RefId: `${RefIdHCHEncrypt}`,
      },
    })
//const rrr =await prismaProgest.$queryRaw`select RefId from ClaimTransection where ClaimTranId ='1000'`;

//const email = 1000
//const resultx = await prismaProgest.$queryRaw(Prisma.sql` SELECT HN FROM ClaimTransection WHERE ClaimTranId = ${email}`)
console.log(resultx)
    if (resultx ==null){ 
      const Data2 = {

        RefId: RefIdHCHEncrypt,
        TransactionNo:'',
        HN: HN,
        VN:VN
      }
      await prismaProgest.claimTransection.create({
        data: Data2
    }); 

  //   await prismaProgest.claimTransection.update({
  //     data: Data2,
  //     where: {ClaimTranId: 1007}
  // }); 

      console.log('NNNNNN')
    }


console.log(RefIdHCHEncrypt);



  return  CheckEligibleHCHDto
}




  // async Eligible() {
  //   let tokenKey = null;
  //   let gettoken = await this.requestAccessToken(); 
  //   let ResponecheckEligible;
  //   tokenKey = gettoken.tokenKey;
  //   console.log(tokenKey)
  //   if ((gettoken.tokenKey == undefined)&&(tokenKey==null)){
  //     gettoken = await this.requestAccessToken(); 
  //     tokenKey = gettoken.tokenKey;
  //   }
  //   let newCheckeligibleDto =new checkeligibleDto();
  //   //newCheckeligibleDto.RefId ="oljhnklefhbilubsEFJKLb651"

  //    newCheckeligibleDto={
  //     RefId: "oljhnklefhbilubsEFJKLb651",
  //     Username: "bhcsi025",
  //     HospitalCode:  this.EncryptAESECB('11750'),
  //     InsurerCode: "13",
  //     ElectronicSignature: "",
  //     DataJsonType: "3",
  //     DataJson: {
  //       IdType: "NATIONAL_ID",
  //       Id: this.EncryptAESECB('0480000023392'),
  //       PolicyType: "IB",
  //       ServiceSetting: "OPD",
  //       IllnessType: "ER",
  //       SurgeryType: "N",
  //       Patient: {
  //         FirstName: "",
  //         LastName: "",
  //         Dob: ""
  //         },
  //         Visit: {
  //           VisitDateTime: "2024-08-01 00:00",
  //           AccidentDate: "2024-08-01"
  //         }
  //       }
  //     }
  //     //console.log(newCheckeligibleDto)
  //    const apiURL= `${AIA_APIURL}/SmartClaim/checkEligible`;
      
  //     try {
  //       //console.log(AIA_APISubscription)
  //       //console.log(tokenKey)
        
  //       axios.post(apiURL, {RefId:newCheckeligibleDto.RefId,
  //         HospitalCode:newCheckeligibleDto.HospitalCode,InsurerCode:newCheckeligibleDto.InsurerCode,Username:newCheckeligibleDto.Username,DataJsonType:newCheckeligibleDto.DataJsonType, DataJson:newCheckeligibleDto.DataJson }, {
  //            headers: {
  //              'Content-Type': 'application/json',
  //              'Ocp-Apim-Subscription-Key': AIA_APISubscription,
  //              'Apim-Auth-Secure-Token':tokenKey
  //            },
  //          })
  //          .then((response) => {
       
  //         console.log(response.data);
  //          // console.log(response.status);
       
  //           response.data.Data.CoverageList.forEach((item, index) => {
  //            ResponecheckEligible =item
  //           // console.log(`Value at position ${index}:`, item);
  //          // console.log(response.data.Data.CoverageList[index].Type)
  //           //console.log(response.data.Data.CoverageList[index].Status)
  //           //console.log(response.data.Data.CoverageList[index].MessageList)
  //          });
  //          console.log(response.data.Data.TransactionNo)
           
  //          })
  //          .catch((error) => {
  //           // console.error('Error:', error);
  //           // this.errored = true;
  //           console.log('---- cathc error');
  //          })
  //          .finally(() => {
  //          //  this.loading = false;
  //          console.log('---- finally');
  //          });
  //         }catch(error){console.log(error)}
  //    //let gettoken =this.requestAccessToken()
    
   
  //   return ResponecheckEligible
  // }


async episodelist(PID: string ,EpiDate: string,EpiType: string) {
  return this.http
    .get(`http://10.10.17.92:52773/HCHIntraAPI/GetEpisodeByPID/${PID}/${EpiDate}/${EpiType}`)
    .pipe(
      map((res) => res.data)
          
    )
    .pipe(
      catchError(() => {
        throw new ForbiddenException('API not available');
      }),
    );
}




  async create(createCourseDto:Eligible){
    //return await prisma.course.create({data:createCourseDto});
   const hn =createCourseDto.DataJson.Patient.HN
   const vn = createCourseDto.DataJson.Visit.VN

   const Data2 = {
    HN: hn,
    VN: vn,
  }
   await prismaProgest.claimTransection.update({
    data: Data2,
    where: {ClaimTranId: 1007}
}); 

   console.log(hn)
    console.log(createCourseDto);
    //const {DataJson}=createCourseDto
   const newCheckeligibleDto =new checkeligibleDto()

   newCheckeligibleDto.RefId =createCourseDto.DataJson.PID
    //newCheckeligibleDto.RefId = "createCourseDto.DataJson.IdType",
       
    
    // const NewcreateCourseDto = {
    //   'PID': createCourseDto.DataJson.IdType,
      
    // };
        
    return await {newCheckeligibleDto}
    //return await {data:createCourseDto}
}
}
