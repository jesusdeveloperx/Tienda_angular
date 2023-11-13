import { Component } from '@angular/core';

export class CompraRealizadaComponent {
  mostrarEnhorabuena: boolean = false;
  mostrarMensajeEnhorabuena: boolean = false;

  mostrarEnhorabuenaYEncuesta() {
    this.mostrarEnhorabuena = true;
    setTimeout(() => {
      this.mostrarMensajeEnhorabuena = true;
    }, 500);
  }

  agradecimiento() {
    this.mostrarEnhorabuena = false;
    this.mostrarMensajeEnhorabuena = false;
  }
}
