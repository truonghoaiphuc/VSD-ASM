import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from '../core/services/authen.service';
import { NotificationService } from '../core/services/notification.service';
import {UrlConstants} from '../core/common/url.constants';
import {MessageContstants} from '../core/common/message.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  model: any = {};
  returnUrl: string;
  constructor(private _authenService: AuthenService,
    private _notificationService : NotificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.login();
  }
  login() {
    this.loading = true;
    this._authenService.login(this.model.username, this.model.password)
    .then(data => {
       this.router.navigate(["/main/user/index"]);
    }).catch(error=>{
      this._notificationService.showError(MessageContstants.SYSTEM_ERROR_MSG,"Lỗi");
      console.log(error);
      this.loading = false;
    });
  }
}
