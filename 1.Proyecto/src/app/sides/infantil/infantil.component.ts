import { Component } from '@angular/core';
import { CarritoService } from '../carrito/carrito.service';

@Component({
  selector: 'app-infantil',
  templateUrl: './infantil.component.html',
  styleUrls: ['./infantil.component.scss']
})
export class InfantilComponent {
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
