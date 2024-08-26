import { Injectable, ForbiddenException } from '@nestjs/common';
//import { CreateCheckEligibleDto } from './dto/create-check-eligible.dto';
//import { UpdateCheckEligibleDto } from './dto/update-check-eligible.dto';

import {AccessTokenDTO} from '../dto/aia.dto';
import axios from 'axios';
import {HttpService} from '@nestjs/axios'
import {map,catchError} from 'rxjs'
import { AccessToken } from './dto/create-check-eligible.dto';
// import {encryptor} from 'aes-ecb';

const AIA_APIURL= process.env.AIA_APIURL;
const API_CONTENTTYPE= process.env.API_CONTENTTYPE;
const AIA_APISecretkey = process.env.AIA_APISecretkey
const AIA_APISubscription = process.env.AIA_APISubscription
const AIA_APIMUserId = process.env.AIA_APIMUserId
const AIA_APIMAppId = [process.env.AIA_APIMAppId]
const aesEcb = require('aes-ecb');
let encryptText ;
class AccessTokenAIA {
  tokenKey: string;
  tokenstatus: string;
}
const accessTokenAIA = new AccessTokenAIA();


@Injectable()
export class CheckEligibleService {
   constructor (private http: HttpService){}

  async requestAccessToken(): Promise<any>{
  const apiURL= `${AIA_APIURL}/TokenManager/requestAccessToken`;
  try  {
  
    axios.post(apiURL, { userId: AIA_APIMUserId , appId: AIA_APIMAppId},{
      headers:{
        'Content-Type': API_CONTENTTYPE ,
        'Ocp-Apim-Subscription-Key':AIA_APISubscription,
      },
    }).then((response)=>{
      accessTokenAIA.tokenKey =response.data.accessTokenInfo.accessToken;
      accessTokenAIA.tokenstatus =response.data.statusCode
    })
   }catch{}
//console.log(accessTokenAIA)
return accessTokenAIA;
}

  async Eligible() {
    let tokenKey = null;
    let gettoken = await this.requestAccessToken(); 
    let ResponecheckEligible;
    tokenKey = gettoken.tokenKey;
    console.log(tokenKey)
    if ((gettoken.tokenKey == undefined)&&(tokenKey==null)){
      gettoken = await this.requestAccessToken(); 
      tokenKey = gettoken.tokenKey;
    }
      const Eligible={
        "RefId": "oljhnklefhbilubsEFJKLb651",
        "Username": "bhcsi025",
        "HospitalCode":  this.EncryptAESECB('11750'),
        "InsurerCode": "13",
        "ElectronicSignature": "",
        "DataJsonType": "3",
        "DataJson": {
          "IdType": "POLICY_NUMBER",
          "Id": "1BsXcyE+m60+FYgKjjQTmQ==",
          "PolicyType": "IB",
          "ServiceSetting": "OPD",
          "IllnessType": "ACC",
          "SurgeryType": "N",
          "Patient": {
            "FirstName": "",
            "LastName": "",
            "Dob": "111"
          },
          "Visit": {
            "VisitDateTime": "2024-08-01 00:00",
            "AccidentDate": "2024-08-01"
          }
        }
      }
 
      const apiURL= `${AIA_APIURL}/SmartClaim/checkEligible`;
      
      try {
        console.log(AIA_APISubscription)
        console.log(tokenKey)
        axios.post(apiURL, {RefId:Eligible.RefId,HospitalCode:Eligible.HospitalCode,InsurerCode:Eligible.InsurerCode,Username:Eligible.Username,DataJsonType:Eligible.DataJsonType, DataJson:Eligible.DataJson }, {
             headers: {
               'Content-Type': 'application/json',
               'Ocp-Apim-Subscription-Key': AIA_APISubscription,
               'Apim-Auth-Secure-Token': tokenKey
             },
           })
           .then((response) => {
       
          console.log(response);
           // console.log(response.status);
       
            response.data.Data.CoverageList.forEach((item, index) => {
             ResponecheckEligible =item
            // console.log(`Value at position ${index}:`, item);
           });
           console.log(response.data.Data.TransactionNo)
            console.log(response.data.Data.CoverageList[0].Type)
           })
           .catch((error) => {
            // console.error('Error:', error);
            // this.errored = true;
            console.log('---- cathc error');
           })
           .finally(() => {
           //  this.loading = false;
           console.log('---- finally');
           });
          }catch(error){console.log(error)}
     //let gettoken =this.requestAccessToken()
    
   
    return Eligible //ResponecheckEligible
  }


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


 EncryptAESECB(text:string):string{
  const Secretkey = AIA_APISecretkey;
   encryptText = aesEcb.encrypt(Secretkey,text)
  return encryptText;
}





  findOne(id: number) {
    return `This action returns a #${id} checkEligible`;
  }

 

  remove(id: number) {
    return `This action removes a #${id} checkEligible`;
  }
}
