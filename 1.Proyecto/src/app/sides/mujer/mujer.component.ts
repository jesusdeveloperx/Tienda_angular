import { Component } from '@angular/core';
import { CarritoService } from '../carrito/carrito.service';

@Component({
  selector: 'app-mujer',
  templateUrl: './mujer.component.html',
  styleUrls: ['./mujer.component.scss']
})
export class MujerComponent {
  imagenActual: string | null = null;

  constructor(private carritoService: CarritoService) {}

  setImagenActual(imagenUrl: string) {
    this.imagenActual = imagenUrl;
  }

  agregarAlCarrito() {
    if (this.imagenActual) {
      const producto = {
        imagenUrl: this.imagenActual,
        cantidad: 1,
        precio: 29.90
      };

      this.carritoService.agregarProducto(producto);
      this.imagenActual = null;
    }
  }
}
