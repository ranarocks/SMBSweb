import { Component, OnInit,  ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-companydetail',
  templateUrl: './companydetail.component.html',
  styleUrls: ['./companydetail.component.css']
})
export class CompanydetailComponent implements OnInit {
  img:string="data:image/jpeg;base64,";
  stateList = [];
  Logo:any;
  model: any = 
{ 
};
  @ViewChild('myForm')
  private myForm: NgForm;

  constructor(private _companyService:CompanyService, private _common: CommonService, private router: Router) { 
   
  }

  ngOnInit() {
   this.GetAllStates();
   this.GetCompanyProfile();
  }
 
  register(modeldata){
    if(modeldata.Logo!=null){
      modeldata.Logo=  modeldata.Logo.split(",")[1];
    }
    
    this._companyService.CreateCompany(modeldata).subscribe(tes => {
      const data :any = tes;
      if (data && data.StatusCode==1) {
        modeldata.Logo = this.img + modeldata.Logo;
        alert(data.Messages[0]);
      }
    },
      error => {
        alert(error);
      });
  }

  onFileChanged(event) {
    this.model.Logo =   event.target.files[0]
    let reader = new FileReader();
    reader.onload = (e: any) => {
        this.model.Logo = e.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  GetCompanyProfile(){
    this._companyService.GetCompanyProfile().subscribe(tes => {
      const data :any = tes;
      if (data) {
        if (data.StatusCode === 1) {
          this.model= Object.assign({}, data.Obj)
          this.model.Logo=this.img+  data.Obj.Logo;
        }
      }
    },
      error => {
        alert(error);

      });
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
}
