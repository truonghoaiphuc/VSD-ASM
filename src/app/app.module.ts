import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './main/home/home.module';
import { NotificationService } from './core/services/notification.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserModule } from './main/user/user.module';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { HotToastModule } from '@ngneat/hot-toast';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    MainModule,
    HomeModule,
    UserModule,
    NgbModule,
    ModalModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HotToastModule.forRoot(),
    ToastrModule.forRoot(),
    HotToastModule.forRoot()
  ],
  providers: [NotificationService, BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
