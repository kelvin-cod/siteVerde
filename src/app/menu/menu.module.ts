import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroselComponent } from './home/carrosel/carrosel.component';

@NgModule({
  declarations: [HomeComponent, CarroselComponent],
  imports: [CommonModule],
  exports: [CarroselComponent]
})
export class MenuModule {}
