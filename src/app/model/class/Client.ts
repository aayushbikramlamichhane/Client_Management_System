export class Client{
  clientId: number;
  contactPersonName: string;
  companyName: string;
  address: string;
  city: string;
  contactNo: string;
  pincode: number;
  state: string;
  employeeStrength: number;
  gstNo: number;
  regNo: number;


  constructor(){
    this.clientId = 0;
    this.contactPersonName = '';
    this.companyName = '';
    this.address = '';
    this.city = '';
    this.contactNo = '';
    this.pincode = 0;
    this.employeeStrength = 0;
    this.state = '';
    this.gstNo = 0;
    this.regNo = 0;
  }
}
