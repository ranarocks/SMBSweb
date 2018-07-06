import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
private isUserLoggedIn;
EmployeeDetail:any={
}
  constructor() {
   }

   setUserLoggedIn(){
    this.isUserLoggedIn=true;
   }

   getUserLoggedIn(){
   return this.EmployeeDetail;
   }

   UserLoggedOut(){
    this.isUserLoggedIn=false;
    }
}
