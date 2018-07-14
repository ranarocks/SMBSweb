import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-amaster',
  templateUrl: './amaster.component.html',
  styleUrls: ['./amaster.component.css']
})
export class AmasterComponent implements OnInit {
  currentUser: Object;

  constructor(private _UserService: UserService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.currentUser = this._UserService.getUserLoggedIn().Name;
  }

  go(url: string) {
    switch (url) {
      case 'Dashboard': {
        this.router.navigate(['adminmaster/CompanyDetail']);
        break;
      }

      case 'BankAccDetail': {
        this.router.navigate(['/Bankaccount']);
        break;
      }

      default: {

        break;
      }
    }

  }
  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/']);
  }
}
