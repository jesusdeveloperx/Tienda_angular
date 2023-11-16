import { Component } from '@angular/core';
import { CarritoService, ProductoEnCarrito } from './carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  productosEnCarrito: ProductoEnCarrito[] = [];
  cantidadSeleccionada: number = 1;
  imagenSeleccionada: string | null = null;
  mostrarPrecioTotal: boolean = false;
  mostrarMensaje: boolean = false;
  mensajeAviso: string = '';
  mostrarAvisoCarroVacio: boolean = false;
  mostrarAvisoCompletaCarrito: boolean = false;
  mostrarAviso2: boolean = false;
  mensajeAviso2: string = 'Su carrito está vacío. Agregue productos antes de comprar.';

  constructor(private carritoService: CarritoService, private router: Router) {}

  ngOnInit() {
    this.productosEnCarrito = this.carritoService.obtenerProductos();
    this.calcularPrecioTotal();
  }

  eliminarProducto(index: number) {
    this.carritoService.eliminarProducto(index);
    this.productosEnCarrito = this.carritoService.obtenerProductos();
    this.limpiarSeleccion();
  }

  agregarProductoAlCarrito() {
    if (!this.isUrlValida(this.imagenSeleccionada)) {
      this.mostrarMensaje = true;
      this.mensajeAviso = 'La URL de la imagen no es válida. Por favor, ingrese una URL válida.';
      return;
    }

    const nuevoProducto: ProductoEnCarrito = {
      imagenUrl: this.imagenSeleccionada || '',
      cantidad: Math.max(0, this.cantidadSeleccionada),
      precio: 29.9
    };

    this.carritoService.agregarProducto(nuevoProducto);
    this.productosEnCarrito = this.carritoService.obtenerProductos();
    this.limpiarSeleccion();
  }

  isUrlValida(url: string | null): boolean {
    return url !== null && url.trim().length > 0;
  }

  limpiarSeleccion() {
    this.imagenSeleccionada = null;
    this.cantidadSeleccionada = 1;
    this.calcularPrecioTotal();
    this.mostrarMensaje = false;
  }

  actualizarCantidad() {
    const inputCantidad = document.getElementById('quantity') as HTMLInputElement;
    if (inputCantidad && this.imagenSeleccionada) {
      const productoEncontrado = this.productosEnCarrito.find(p => p.imagenUrl === this.imagenSeleccionada);
      if (productoEncontrado) {
        productoEncontrado.cantidad = +inputCantidad.value;
        this.calcularPrecioTotal();
      }
    }
  }


  seleccionarImagen(imagenUrl: string) {
    this.imagenSeleccionada = imagenUrl;
    this.mostrarPrecioTotal = true;
    const producto = this.productosEnCarrito.find(p => p.imagenUrl === this.imagenSeleccionada);
    if (producto) {
      this.cantidadSeleccionada = producto.cantidad;
      const cantidadInput = document.getElementById('quantity') as HTMLInputElement;
      if (cantidadInput) {
        cantidadInput.value = this.cantidadSeleccionada.toString();
      }
    } else {
      this.cantidadSeleccionada = 1;
      const cantidadInput = document.getElementById('quantity') as HTMLInputElement;
      if (cantidadInput) {
        cantidadInput.value = this.cantidadSeleccionada.toString();
      }
    }
    const inputProducto = document.getElementById('product') as HTMLInputElement;
    if (inputProducto) {
      inputProducto.value = this.imagenSeleccionada || '';
    }
    this.actualizarCantidad();
  }

  calcularPrecioTotal() {
    const precioTotal = this.productosEnCarrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
    this.mostrarAviso2 = precioTotal === 0;
    const totalInputElement = document.getElementById('total') as HTMLInputElement;
    if (totalInputElement) {
      totalInputElement.value = precioTotal.toFixed(2);
    }
    return precioTotal.toFixed(2);
  }

  tieneProductosEnCarrito(): boolean {
    return this.productosEnCarrito.length > 0;
  }

 comprar() {
  if (!this.tieneProductosEnCarrito()) {
    this.mostrarAvisoCarroVacio = true;
  } else if (!this.isUrlValida) {
    this.mostrarAvisoCompletaCarrito = true;
  } else {
    const precioTotal = parseFloat(this.calcularPrecioTotal()); // Convertir a número
    if (precioTotal > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.router.navigate(['/facturacion']);
    } else {
      console.log('El precio total es cero. No se navegará a facturación.');
      this.mostrarAviso2 = true;
    }
  }
}
}
