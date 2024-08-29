import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
//import { TrakcareVitalSignDto } from './dto/trakcare-vitalsign-dto';

const Trakcare_APIURL= process.env.TRAKCARE_APIURL;
@Injectable()
export class VitalsignService {
  constructor(private readonly  httpService: HttpService) {}

    async getVitalSign(episodeNumber :string): Promise<any> {
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
   // `http://10.10.17.92:52773/HCHIntraAPI/GetVisitDateTime/${VN}`)

   // const response = await axios.get(`${Trakcare_APIURL}/getVitalSignByEpisode/${episodeNumber}`);
 //return  response
  }



