import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false; // Variable para rastrear el estado de inicio de sesión

  ngOnInit() {
    // Verificar si el usuario ya está autenticado al cargar la página
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
    }
  }

  login() {
    // Simular una autenticación exitosa sin verificar las credenciales
    // Crear un token ficticio (puede usar una biblioteca como jsonwebtoken para tokens reales)
    const token = 'token-12345';

    // Almacenar el token en el localStorage
    localStorage.setItem('token', token);

    // Establecer el estado de inicio de sesión en verdadero
    this.isLoggedIn = true;

    // Redirigir a la página de inicio o realizar otras acciones después del inicio de sesión exitoso
    console.log('Inicio de sesión exitoso');
  }

  logout() {
    // Eliminar el token y establecer el estado de inicio de sesión en falso al cerrar la sesión
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }
}
