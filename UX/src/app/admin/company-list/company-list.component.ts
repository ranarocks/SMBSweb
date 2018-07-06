import { Component, OnInit } from '@angular/core';
import { GridOptions } from "ag-grid";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  private gridOptions: GridOptions;
  constructor() {
    this.gridOptions = <GridOptions>{
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
      }
    };
    this.gridOptions.columnDefs = [
      {
        headerName: "ID",
        field: "ID",
        width: 100
      },
      {
        headerName: "Employee Code",
        field: "EMPLOYEECODE",
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
        headerName: "Department",
        field: "Department",
        width: 100
      },
      {
        headerName: "Job Title",
        field: "JobTitle",
        width: 100
      },
      {
        headerName: "Exp. Letter",
        field: "EXPERIENCELETTER",
        width: 100
      },
      {
        headerName: "Pay Slip",
        field: "PAYSLIP",
        width: 100
      }

    ];
    this.gridOptions.rowData = [
      { id: 5, value: 10 },
      { id: 10, value: 15 },
      { id: 15, value: 20 }
    ]
  }

  ngOnInit() {

  }

}
