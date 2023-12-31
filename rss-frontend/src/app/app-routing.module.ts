import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full',
  }, 
  {
    path: 'authentication',
    loadChildren: () => import('./pages/auth/auth.module').then(x => x.AuthModule),
    data: { title: 'Authentication' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
