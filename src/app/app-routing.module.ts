import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./private/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./public/home.module').then((m) => m.HomeModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
