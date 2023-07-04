import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { RssfeedListComponent } from './rssfeed-list/rssfeed-list.component';

const routes: Routes = [
  { path: 'sign-up', component: SignupComponent, data: { title: 'Sign Up' } },
  { path: 'log-in', component: SigninComponent, data: { title: 'Sign In' } },
  { path: 'rss-feed-list', component: RssfeedListComponent, data: { title: 'RSS Feed List' } },
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
