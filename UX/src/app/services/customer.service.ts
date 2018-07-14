import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


@Injectable()
export class CustomerService {

  constructor(private _http:HttpClient) { 

  }

  GetCustomerList(model){
    // let Params = new HttpParams();
    // Params = Params.append('type',type);
    // Params = Params.append('id',id);
    return this._http.post(environment.apiUrl+"Customer/GetCustomerList",model);
  }

  CreateCustomer(data){
    return this._http.post(environment.apiUrl + 'Customer/CustomerOperation', data);
  }
}
