import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrudMarcaComponent } from './components/crud-marca/crud-marca.component';
import { InformationComponent } from './components/information/information.component';
import { HomeComponent } from './components/home/home.component';
import { GaleriaComponent } from './components/galeria/galeria.component';


const routes: Routes = [
  {path:"crudMarca", component:CrudMarcaComponent},
  {path:"information", component:InformationComponent},
  {path:"home", component:HomeComponent},
  {path:"galerias", component:GaleriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
