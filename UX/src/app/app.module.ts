import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { CanActivate } from "@angular/router";
import {AgGridModule} from "ag-grid-angular/main";
import { AppComponent } from './app.component';

import { EmailFormatValidatorDirective } from './directive/email-format-validator.directive';
import { LoginComponent } from './login/login.component';
import { AmasterComponent } from './admin/amaster/amaster.component';
import { AregistrationComponent } from './admin/aregistration/aregistration.component';
import { AwelcomeComponent } from './admin/awelcome/awelcome.component';
import { UmasterComponent } from './user/umaster/umaster.component';
import { UwelcomeComponent } from './user/uwelcome/uwelcome.component';
import { UregistrationComponent } from './user/uregistration/uregistration.component';
import { DashboardmasterComponent } from './admin/dashboardmaster/dashboardmaster.component';
import { CompanydetailComponent } from './admin/companydetail/companydetail.component';
import { BankaccountdetailComponent } from './admin/bankaccountdetail/bankaccountdetail.component';
import { AdmindetailComponent } from './admin/admindetail/admindetail.component';
import { CompanyListComponent } from './admin/company-list/company-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
import { service } from './services/service.service';
import { UserService } from './services/user.service';
import{CommonService} from './services/common.service';
import { CompanyService } from './services/company.service';
import { ROUTING } from './app-routing.module';
import {  RouterModule } from '@angular/router';
import { ShowErrorsComponent } from './common/show-errors/show-errors.component';
import { CustomerlistComponent } from './admin/customerlist/customerlist.component';
import { CustomerService } from './services/customer.service';

import { CustomerdetailsComponent } from './admin/customerdetails/customerdetails.component';



// , canActivate: [AuthGuard]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AmasterComponent,
    AregistrationComponent,
    AwelcomeComponent,
    UmasterComponent,
    UwelcomeComponent,
    UregistrationComponent,
    DashboardmasterComponent,
    CompanydetailComponent,
    BankaccountdetailComponent,
    AdmindetailComponent,
    ShowErrorsComponent,
    EmailFormatValidatorDirective,
    CompanyListComponent,
    CustomerlistComponent,
    CustomerdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    ROUTING,
    HttpClientModule,
    ReactiveFormsModule, 
    AgGridModule.withComponents(
      []
  )
  ],
  providers: [
    service, UserService, CompanyService,
    AuthGuard, CommonService , CustomerService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
