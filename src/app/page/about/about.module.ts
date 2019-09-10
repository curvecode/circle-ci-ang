import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { UserService } from '../../common/service/userService';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [UserService],
})
export class AboutModule { }
