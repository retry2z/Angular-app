import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'contact-us',
  //   loadChildren: () => import('src/app/pages/contact-us/contact-us.module').then(m => m.ContactUsModule),
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'gallery',
  //   loadChildren: () => import('src/app/pages/gallery/gallery.module').then(m => m.GalleryModule),
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule),
  //   pathMatch: 'full',
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule),
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**', redirectTo: '/home', pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
