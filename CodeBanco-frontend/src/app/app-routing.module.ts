// *******************Importação**********************
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TransferirComponent } from './componentes/transferir/transferir.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// *******************Criação das Rotas**********************
const routes: Routes = [
  { path:'', redirectTo:'/inicio', pathMatch:'full'},
  { path:'inicio', component:InicioComponent},
  { path: 'add', component:TransferirComponent},
  { path: 'edit/:id', component:ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
