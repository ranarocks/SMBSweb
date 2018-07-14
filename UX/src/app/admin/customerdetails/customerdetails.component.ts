import { Component, OnInit,  ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validator} from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { CustomerService } from '../../services/customer.service';
import { customer} from '../../models/customer';


@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  stateList = [];
  //  ActiveType:[]=[{key:1,value:'Active'},{key:2,value:'In-Active'}];
  //  const MaritialStatus=[{key:1,value:'Single'},{key:2,value:'Married'}];
  customerInput: any = {};
activeType=[{key:1,value:'Active'},{key:2,value:'In-Active'}];
MaritialStatuskeys=['Single','Married','Other'];
GenderList=['Male','Female'];
customerForm: FormGroup;
customer: customer;

  constructor(private _customerService:CustomerService, 
    private _common: CommonService, private router: Router,
    private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() { 
    this.GetAllStates();
  }

  GetAllStates() {
    this._common.GetAllStates().subscribe(tes => {
      const data :any = tes;
     if (data) {
       if (data.StatusCode === 1) { 
       this.stateList=  data.List; 
       }
     }
   },
     error => {
       alert(error);

     });
 }

  createForm(){
this.customerForm=this.fb.group({
  customercode:'',
  dataofbirth: '',
  firstname:'',
  lastname:'',
  gender:'Male',
  identityproof:'',
  aadhar:'',
  pan:'',
  gstn:'',
  maritalstatus:'',
  email:'',
  address:'',
  city:'',
  state:'',
  zip:'',
  firstvisit:'',
  lastvisit:'',
  visitcount:'',
  active:'',
  mobileno:''
});
localStorage.getItem('')
if(localStorage.getItem('customerID')){
  this.getCustomerData(localStorage.getItem('customerID'));
}
  }

getCustomerData(customerID){
  this.customerInput.type=1;
    this.customerInput.Id=customerID;
  this._customerService.GetCustomerList(this.customerInput).subscribe(apidata=>{
    const data :any = apidata;
    if(data.StatusCode==1){
      this.customerForm=this.fb.group({
        customercode:data.List[0].CustomerCode,
        dataofbirth: data.List[0].DateOfBirth.substring(0,10),
        firstname:data.List[0].FirstName,
        lastname:data.List[0].LirstName,
        gender:data.List[0].Gender,
        aadhar:data.List[0].AadharNo,
        pan:data.List[0].PAN,
        gstn:data.List[0].GSTN,
        maritalstatus:data.List[0].MaritalStatus,
        email:data.List[0].Email,
        address:data.List[0].FirstName,
        city:data.List[0].City,
        state:data.List[0].StateId,
        zip:data.List[0].Zip,
        firstvisit:data.List[0].FistVisitDate,
        lastvisit:data.List[0].LastVisitDate,
        visitcount:data.List[0].VisitCount,
        active:data.List[0].Active,
        mobileno:data.List[0].MobileNo
      });
    }
    //this.customerList=data.List;
    
   });
}
  submitForm(){
    debugger;
    this.customer = this.customerForm.value;
   this._customerService.CreateCustomer(this.customer);
  }
}
