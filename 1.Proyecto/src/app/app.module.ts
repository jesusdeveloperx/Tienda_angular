import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { Main2Component } from './main-2/main-2.component';
import { FooterComponent } from './header/footer/footer.component';
import { HombreComponent } from './sides/hombre/hombre.component';
import { MujerComponent } from './sides/mujer/mujer.component';
import { InfantilComponent } from './sides/infantil/infantil.component';
import { CarritoComponent } from './sides/carrito/carrito.component';
import { PerfilComponent } from './sides/perfil/perfil.component';
import { FacturacionComponent } from './sides/facturacion/facturacion.component';
import { CommonModule } from '@angular/common';
// import { CompraRealizadaComponent } from './sides/compraRealizada/compraRealizada.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    Main2Component,
    FooterComponent,
    HombreComponent,
    MujerComponent,
    InfantilComponent,
    CarritoComponent,
    PerfilComponent,
    FacturacionComponent,
    // CompraRealizadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
