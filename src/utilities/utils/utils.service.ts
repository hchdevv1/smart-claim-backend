import { Injectable  } from '@nestjs/common';
import { prismaProgest } from '../../database/database';
import axios from 'axios';
import {AccessTokenAIA} from './dto/accessToken';

const AIA_APIURL= process.env.AIA_APIURL;
const API_CONTENTTYPE= process.env.API_CONTENTTYPE;
const AIA_APISecretkey = process.env.AIA_APISecretkey
const AIA_APISubscription = process.env.AIA_APISubscription
const AIA_APIMUserId = process.env.AIA_APIMUserId
const AIA_APIMAppId = [process.env.AIA_APIMAppId]

const accessTokenAIA = new AccessTokenAIA();
// eslint-disable-next-line @typescript-eslint/no-require-imports
const aesEcb = require('aes-ecb');

@Injectable()
export class UtilsService {

 async requestAccessToken(){
    const apiURL= `${AIA_APIURL}/TokenManager/requestAccessToken`;
    try  {
      await axios.post(apiURL, { userId: AIA_APIMUserId , appId: AIA_APIMAppId},{
        headers:{
          'Content-Type': API_CONTENTTYPE ,
          'Ocp-Apim-Subscription-Key':AIA_APISubscription,
        },
      }).then((response)=>{
        accessTokenAIA.tokenKey =response.data.accessTokenInfo.accessToken;
        accessTokenAIA.expireIn =response.data.accessTokenInfo.expireIn;
        accessTokenAIA.tokenstatus =response.data.statusCode
      })
     }catch{}
  //console.log(accessTokenAIA)
  return  accessTokenAIA;
  }
 EncryptAESECB(text:string):string{
    const Secretkey = AIA_APISecretkey;
    const encryptText = aesEcb.encrypt(Secretkey,text)
    return  encryptText;
  }
  
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
  async ServiceSetting(InsuranceCode: string) {
    const myNumber:number = parseInt(InsuranceCode);
    return await prismaProgest.serviceSetting.findMany({ where: {InsurerCode: myNumber}}
      )
       
  }
}
