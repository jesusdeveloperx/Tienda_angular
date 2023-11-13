// carrito.service.ts
import { Injectable } from '@angular/core';

export interface ProductoEnCarrito {
  imagenUrl: string;
  cantidad: number;
  precio: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  productosEnCarrito: ProductoEnCarrito[] = [];


  precioFijo: number = 29.9;

  agregarProducto(producto: ProductoEnCarrito) {
    producto.precio = this.precioFijo; // Asigna el precio fijo al agregar un producto

    this.productosEnCarrito.push(producto);
  }

  eliminarProducto(index: number) {
    if (index >= 0 && index < this.productosEnCarrito.length) {
      this.productosEnCarrito.splice(index, 1);
    }
  }

  obtenerProductos() {
    return this.productosEnCarrito;
  }

  actualizarProductos(nuevosProductos: ProductoEnCarrito[]): void {
    this.productosEnCarrito = nuevosProductos;
  }

}
