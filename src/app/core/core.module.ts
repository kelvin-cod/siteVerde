import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { RedesSociaisComponent } from './redes-sociais/redes-sociais.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RedesSociaisComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    RedesSociaisComponent],
  imports: [CommonModule, RouterModule]
})
export class CoreModule {}
