import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path :"",redirectTo : "home", pathMatch : "full"
  },
  {
    path : "home", component : HomeComponent
  },
  {
    path : "create", component : CreateComponent
  },
  {
    path : "read", component : ReadComponent 
  },
  {
    path : "update/:id" , component:  UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
