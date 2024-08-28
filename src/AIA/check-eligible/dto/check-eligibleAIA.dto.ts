

  export class checkeligibleDto {
    RefId:string;
    Username:  string;
    HospitalCode:  string;
    InsurerCode :  string;
    ElectronicSignature: string;
    DataJsonType: string;
    DataJson:DataJsonDto
  }
  export class DataJsonDto {
    IdType:  string;
    Id: string;
    PolicyType: string;
    ServiceSetting:  string;
    IllnessType: string;
    SurgeryType: string;
    Patient:PatientDto;
    Visit:VisitDto;
  }

  export class PatientDto {
    FirstName:  string;
    LastName: string;
    Dob: string;
  }
  export class VisitDto {

  VisitDateTime:string;
  AccidentDate: string;
  }