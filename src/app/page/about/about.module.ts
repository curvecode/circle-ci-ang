import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { UserService } from '../../common/service/userService';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [UserService],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
