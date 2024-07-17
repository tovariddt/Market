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
errorMessageEmail: any;
errorMessagePassword: any;

  constructor(private router: Router) {
    this.loginObj = new Login();
  }


  onLogin() {
    
      // Validar el formato del correo electrónico
      if (this.loginObj.Email !== "Correo@gmail.com" ) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
      }
    
      // Validar la contraseña
      if (this.loginObj.Password !== "1234") {
        alert("Credenciales incorrectas. Verifica la contraseña.");
        return;
      }
    
      // Mostrar una alerta con la información escrita
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