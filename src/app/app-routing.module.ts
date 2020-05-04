import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurgerListComponent } from './burger-list/burger-list.component';


const routes: Routes = [
  { path: 'burgers', component: BurgerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
