import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar/registrar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegistrarComponent, LoginComponent],
  imports: [CommonModule, RouterModule],
  exports: [RegistrarComponent, LoginComponent]
})
export class UserModule {}
