// facturacion.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent {
  formularioFacturacion: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formularioFacturacion = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      calleNumero: ['', Validators.required],
      localidad: ['', Validators.required],
      provincia: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  enviarFormulario() {
    this.router.navigate(['/compra']);
  }


  // private marcarCamposComoTocados(formGroup: FormGroup) {
  //   Object.values(formGroup.controls).forEach(control => {
  //     control.markAsTouched();

  //     if (control instanceof FormGroup) {
  //       this.marcarCamposComoTocados(control);
  //     }
  //   });
  }

