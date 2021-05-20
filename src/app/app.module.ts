import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comun/header/header.component';
import { FooterComponent } from './comun/footer/footer.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    LayoutComponent,
    AcercaDeComponent,
    DetalleProductoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
