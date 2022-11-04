import {ApplicationRef, NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from "@angular/router";
import { ListeTelephonesComponent } from 'src/app/liste-telephones/liste-telephones.component';

const routes: Routes = [
  { path:"telephones", component: ListeTelephonesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
