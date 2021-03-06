import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
//import { environment } from '../../environments/environment';

@Injectable()
export class CompanyService {

  constructor(private _http:HttpClient) { 

  }

  GetCompanyProfile(){
    return this._http.get('http://ranarocks.azurewebsites.net/'+"company/GetCompanyProfile");
  }

  CreateCompany(data){
    return this._http.post('http://ranarocks.azurewebsites.net/' + 'company/create', data);
  }
}
