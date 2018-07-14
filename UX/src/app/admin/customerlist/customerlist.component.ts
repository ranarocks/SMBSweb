import { Component, OnInit,  ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { CustomerService } from '../../services/customer.service';
import { GridOptions } from "ag-grid";
//import { customer} from '../../models/customer';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  private gridOptions: GridOptions;
customerList=[];
rowData: any[] = [];
gridheaderNames=['Customer Code','Full Name','Gender','Mobile No','Email','Full Address'];
customerInput: any = {};

   constructor(private _customerService:CustomerService, private _common: CommonService, private router: Router) {
    


  }
  navigate(val){
    localStorage.setItem('customerID',val);
    this.router.navigate(['adminmaster/Customerdetails']);
  }
  ngOnInit() {
    this.customerInput.type=1;
    this.customerInput.Active=1;
    this._customerService.GetCustomerList(this.customerInput).subscribe(apidata=>{
      const data :any = apidata;
      if(data.StatusCode==1){
        this.rowData = data.List;
      }
     });
  }

 
}
