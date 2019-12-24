import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { BlogComponent } from './page/blog/blog.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { CardComponent } from './page/component/card/card.component';
import { CardService } from './common/service/cardService';
import { DrapDropDirective } from './common/directive/drap-drop.directive';
import { UploadComponent } from './common/component/upload/upload.component';
import { AboutModule } from './page/about/about.module';
import { ConfirmComponent } from './page/dialog/confirm/confirm.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    AboutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
