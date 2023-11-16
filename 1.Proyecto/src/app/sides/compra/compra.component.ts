import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent {
  fechaActual: string;

  constructor(private router: Router) {
    this.fechaActual = this.obtenerFechaActual();
  }

  redirigirACarrito() {
    this.router.navigate(['/main']);
  }

  obtenerFechaActual(): string {
    const fecha = new Date();
    return fecha.toLocaleDateString();
  }
}
