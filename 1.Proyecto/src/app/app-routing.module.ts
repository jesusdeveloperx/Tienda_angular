import { CompraComponent } from './sides/compra/compra.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfantilComponent } from './sides/infantil/infantil.component';
import { MujerComponent } from './sides/mujer/mujer.component';
import { HombreComponent } from './sides/hombre/hombre.component';
import { CarritoComponent } from './sides/carrito/carrito.component';
import { PerfilComponent } from './sides/perfil/perfil.component';
import { FacturacionComponent } from './sides/facturacion/facturacion.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'hombre', component: HombreComponent },
  { path: 'mujer', component: MujerComponent },
  { path: 'infantil', component: InfantilComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'facturacion', component: FacturacionComponent },
  { path: 'compra', component: CompraComponent },
  { path: 'main', component: MainComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
