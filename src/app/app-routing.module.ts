import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPageComponent } from './content-page/content-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '',     component: LoginPageComponent, pathMatch: "full"},
  { path: 'login-component', component: LoginPageComponent },
  { path: 'content-component', component: ContentPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
