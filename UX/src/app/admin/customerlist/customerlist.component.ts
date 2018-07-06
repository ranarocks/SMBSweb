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
    this.gridOptions.rowData = [
      { Id: 5, CustomerCode: 10 },
      { Id: 10, CustomerCode: 15 },
      { Id: 15, CustomerCode: 20 }
    ]
  }

  ngOnInit() {
  }

 
}
