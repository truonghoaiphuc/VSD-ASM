import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _notificationService: NotificationService) { }

  ngOnInit(): void {
    this._notificationService.showSuccess("Xin chào admin","test");
  }
  showsuccess(){
    this._notificationService.showInfo("View thành công","input");
    console.log(this._notificationService);
  }
}
