import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main.routes';
import { LoginModule } from '../login/login.module';
import { HomeComponent } from './home/home.component';
import { SidebarMenuComponent } from '../shared/sidebar-menu/sidebar-menu.component';
import { TopMenuComponent } from '../shared/top-menu/top-menu.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    SidebarMenuComponent,
    TopMenuComponent,
    UserComponent,
  ],
  imports: [CommonModule, FormsModule, LoginModule, RouterModule.forChild(mainRoutes)],
})
export class MainModule {}
