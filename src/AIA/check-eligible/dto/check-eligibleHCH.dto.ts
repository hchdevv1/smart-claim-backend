
  export class checkEligibleHCHDto {
    DataJson: DataJsonDto; 
  }
export class DataJsonDto {
    IdType:string;
    PID:  string;
    PolicyTypeCode:  string;
    PolicyType:  string;
    ServiceSettingCode :  string;
    ServiceSetting :  string;
    IllnessTypeCode: string;
    IllnessType: string;
    SurgeryTypeCode: string;
    SurgeryType: string;
    Patient: PatientDto;
    Visit: VisitDto;
  }
export class PatientDto {
    FirstName:  string;
    LastName: string;
    Dob: string;
    HN: string;
  }
export class VisitDto {
   
    VN: string;
  }