import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProductListComponent } from './component/productos/product-list/product-list.component';
import { ProductDetailComponent } from './component/productos/product-detail/product-detail.component';



export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    //productos
    { path: '', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent },


    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })

  export class AppRoutingModule { }


