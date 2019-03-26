import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroselComponent } from './home/carrosel/carrosel.component';
import { HomeComponent } from './home/home.component';
import { EmpresaComponent } from './empresa/empresa.component';

@NgModule({
  declarations: [HomeComponent, CarroselComponent, EmpresaComponent],
  imports: [CommonModule, RouterModule],
  exports: [CarroselComponent, HomeComponent, EmpresaComponent]
})
export class MenuModule {}
