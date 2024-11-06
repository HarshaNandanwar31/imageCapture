import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'first-page',
    pathMatch: 'full'
  },

  {
    path: 'first-page',
    loadChildren: () => import('./first-page/first-page.module').then( m => m.FirstPagePageModule)
  },
  {
    path: 'second-page',
    loadChildren: () => import('./second-page/second-page.module').then( m => m.SecondPagePageModule)
  },
  {
    path: 'third-page',
    loadChildren: () => import('./third-page/third-page.module').then( m => m.ThirdPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
