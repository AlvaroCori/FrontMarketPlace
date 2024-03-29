import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '/auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
  { path: '/main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  { path: '**', redirectTo: '/auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
