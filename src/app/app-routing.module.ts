import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent},
  {
    path: 'acercaDe', 
    component: AcercaDeComponent},
  {
    path: 'detalleProducto', 
    component: DetalleProductoComponent},
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: '**' , 
    pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
