import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerObj: Register;
  constructor(private router: Router) {
    this.registerObj = new Register();
  }

onRegister() {
    // Validar el formato del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (this.registerObj.Email == 'Correo@gmail.com' || emailRegex.test(this.registerObj.Email)) {
        document.getElementById('Allform')!.classList.remove('d-none');
        document.getElementById('AlertEmail')!.classList.add('d-none');
        return;
    } else {
      document.getElementById('AlertEmail')!.classList.remove('d-none');
      document.getElementById('Allform')!.classList.add('d-none');

    }
}


}
export class Register {
  Email: string;
  constructor() {
    this.Email = '';
  }
}