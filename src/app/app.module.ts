import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { BlogComponent } from './page/blog/blog.component';
import { AboutComponent } from './page/about/about.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { CardComponent } from './page/component/card/card.component';
import { CardService } from './common/service/cardService';
import { DrapDropDirective } from './common/directive/drap-drop.directive';
import { UploadComponent } from './common/component/upload/upload.component';
import { UserService } from './common/service/userService';
import { HttpClientModule } from '@angular/common/http';
import { AboutModule } from './page/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,
    DrapDropDirective,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    AboutModule
  ],
  providers: [CardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
