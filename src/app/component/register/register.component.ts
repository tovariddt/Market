// register.component.ts
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registroObj: Registro;
correo: any;
nombre: any;
apellido_paterno: any;
apellido_materno: any;
direccion: any;
referencia: any;
telefono: any;
contrasena: any;

  constructor(private router: Router) {
    this.registroObj = new Registro();
  }

  onRegister() {
    // Validar los campos y realizar el registro
    // (Aquí debes implementar la lógica de registro según tus necesidades)

    // Redirigir al usuario a la ruta "/home" u otra ruta apropiada
    this.router.navigateByUrl('/home');
  }
}

export class Registro {
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  direccion: string;
  referencia: string;
  telefono: string;
  correo: string;
  contrasena: string;

  constructor() {
    this.nombre = '';
    this.apellido_paterno = '';
    this.apellido_materno = '';
    this.direccion = '';
    this.referencia = '';
    this.telefono = '';
    this.correo = '';
    this.contrasena = '';
  }
}
