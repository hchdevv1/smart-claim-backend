
  export class ReplyCheckEligibleHCHDto {
    Result:ResultDto;
    Data:DataDto;
    CustomerDetail: CustomerDetailDto;

  }

   class ResultDto {
  Code:  string;
  Message: string;
  MessageTh: string;
  }

   class DataDto{
  RefId:  string;
  TransactionNo: string;
  InsurerCode: string;
  CoverageClaimStatus: string;
  RemarkList: string;
  CoverageListDto: CoverageListDto;
}



 class CoverageListDto {
    Type:  string;
    Status: string;
    MessageList: MessageListDto;
  }

   class MessageListDto {
  PolicyNo: string;
  PlanName: string;
  MessageTh: string;
  MessageEn: string;
  RuleNo: string;
  }

   class CustomerDetailDto {
    PolicyNo: string;
    MemberShipId: string;
    FirstName: string;
    LastName: string;
    NationalId: string;
    }