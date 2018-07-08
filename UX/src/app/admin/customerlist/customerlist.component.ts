import { Component, OnInit,  ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { CustomerService } from '../../services/customer.service';
import { GridOptions } from "ag-grid";

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  private gridOptions: GridOptions;
customerList=[];
   constructor(private _customerService:CustomerService, private _common: CommonService, private router: Router) {
    this.gridOptions = <GridOptions>{
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
      }
    };
    this.gridOptions.columnDefs = [
      {
        headerName: "Id",
        field: "Id",
        width: 100
      },
      {
        headerName: "Customer Code",
        field: "CustomerCode",
        width: 100
      },
      {
        headerName: "Full Name",
        field: "FullName",
        width: 100
      },
      {
        headerName: "Gender",
        field: "Gender",
        width: 100
      },
      {
        headerName: "Mobile No",
        field: "MobileNo",
        width: 100
      },
      {
        headerName: "Aadhar No",
        field: "AadharNo",
        width: 100
      },
      {
        headerName: "Email",
        field: "Email",
        width: 100
      },
      {
        headerName: "Full Address",
        field: "FullAddress",
        width: 100
      }
    ];
    this.createRowData();
   // this.gridOptions.rowData = this.createRowData();
  }
  private createRowData() {
    debugger;
    const rowData: any[] = []; 
    this._customerService.GetCustomerList(1,1).subscribe(apidata=>{
      const data :any = apidata;
      //this.customerList=data.List;
      if(data.List.length>=0){
        for (let i = 0; i < data.List.length; i++) {
          rowData.push({
            Id:data.List[i].Id,
            CustomerCode:data.List[i].CustomerCode
          });
        }
      }
      this.gridOptions.rowData =rowData;
     });
  }
  ngOnInit() {
  }

 
}
