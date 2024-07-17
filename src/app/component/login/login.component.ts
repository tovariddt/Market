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

 
    // Validar el formato del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (this.loginObj.Email !== 'Correo@gmail.com' || !emailRegex.test(this.loginObj.Email)) {
      // Mostrar la alerta
      document.getElementById('AlertEmail')!.classList.remove('d-none');
      return;
    }
    // Validar la contraseña
    if (this.loginObj.Password !== "1234") {
      document.getElementById('AlertPaswork')!.classList.remove('d-none');
        return;
    }

    // Mostrar una alerta con la información escri
    const mensajeAlerta = "¡Bienvenido! Has iniciado sesión correctamente."+
    "Tu Correo es "+this.loginObj.Email+" Tu Contraseña es "+this.loginObj.Password;
    alert(mensajeAlerta);
    // Redirigir al usuario a la ruta "/home"
    this.router.navigateByUrl('/home');
}

onRegister() {
  this.router.navigateByUrl('/register');
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