import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './page/blog/blog.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { AboutComponent } from './page/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'blog',
    component: BlogComponent,
    children: []
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false, // Enable or disable hash tag on URL
    enableTracing: false // Toggles whether the router should log all navigation events to the console
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
