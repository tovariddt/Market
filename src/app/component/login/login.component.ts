import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;

  constructor(private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    // Validar el correo electrónico y la contraseña
    if (this.loginObj.Email !== "Correo" || this.loginObj.Password !== "1234") {
      alert("Credenciales incorrectas. Verifica el correo y la contraseña.");
      return;
    }

    // Redirigir al usuario a la ruta "/home"
    this.router.navigateByUrl('/home');
  }
}

export class Login {
  Email: string;
  Password: string;
  constructor() {
    this.Email = '';
    this.Password = '';
  }
}