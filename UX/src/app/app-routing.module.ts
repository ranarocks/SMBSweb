import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AmasterComponent } from './admin/amaster/amaster.component';
import { AregistrationComponent } from './admin/aregistration/aregistration.component';
import { AwelcomeComponent } from './admin/awelcome/awelcome.component';

import { UmasterComponent } from './user/umaster/umaster.component';
import { UwelcomeComponent } from './user/uwelcome/uwelcome.component';
import { UregistrationComponent } from './user/uregistration/uregistration.component';
import { DashboardmasterComponent } from './admin/dashboardmaster/dashboardmaster.component';
import { CompanydetailComponent } from './admin/companydetail/companydetail.component';
import { CompanyListComponent } from './admin/company-list/company-list.component';
import { BankaccountdetailComponent } from './admin/bankaccountdetail/bankaccountdetail.component';
import { AdmindetailComponent } from './admin/admindetail/admindetail.component';
import { CustomerlistComponent } from './admin/customerlist/customerlist.component';
import { CustomerdetailsComponent } from './admin/customerdetails/customerdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AuthGuard } from './auth.guard'


export const AppRoutes: Routes =[
  { path: 'login', component: LoginComponent },
  // { path: 'aregisteration', component: AregistrationComponent },
  {
    path: 'adminmaster', component: AmasterComponent, data: { title: 'Admin Views' },
    children: [
      { path: '', redirectTo: 'awelcome', pathMatch: 'full' },
      { path: 'awelcome', component: AwelcomeComponent },
      { path: 'aregisteration', component: AregistrationComponent },
      { path: 'Bankaccount', component: BankaccountdetailComponent },
      { path: 'CompanyDetail', component: CompanydetailComponent },
      { path: 'CompanyList', component: CompanyListComponent },
      { path: 'CustomerList', component: CustomerlistComponent },
      { path: 'Customerdetails', component: CustomerdetailsComponent },
      // {
      //   path: 'dashboardmaster', component: DashboardmasterComponent, data: { title: 'Admin Dashboard Views' },
      //   children: [
      //     { path: '**', redirectTo: 'admindetail' },
      //     { path: 'admindetail', component: AdmindetailComponent },
      //   ]
      // },
    ]
  },
  {
    path: 'umaster', component: UmasterComponent, data: { title: 'User Views' },
    children: [
      { path: 'uwelcome', component: UwelcomeComponent },
      { path: 'uregistration', component: UregistrationComponent },
      { path: '**', redirectTo: 'uwelcome' }
    ]
  },
  { path: '**', redirectTo: 'login' }

];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

