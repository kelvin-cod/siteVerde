import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CarroselComponent } from './carrosel/carrosel.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CarroselComponent],
  exports: [HeaderComponent, FooterComponent, CarroselComponent],
  imports: [CommonModule, RouterModule]
})
export class CoreModule {}
