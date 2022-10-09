import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatCategorieComponent } from './cat-categorie/cat-categorie.component';
import { CatListComponent } from './cat-list/cat-list.component';

const routes: Routes = [
  { path: '', component: CatListComponent },
  { path: 'categories', component: CatCategorieComponent },
];
export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
