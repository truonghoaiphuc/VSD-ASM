import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';

export const userRoutes : Routes = [
  {path:'', redirectTo:'index', pathMatch:'full' },
  {path:'index', component: UserComponent  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    AngularMultiSelectModule,
    ModalModule.forRoot(),
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
