import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroselComponent } from './home/carrosel/carrosel.component';
import { HomeComponent } from './home/home.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarroselComponent,
    EmpresaComponent,
    GaleriaComponent,
    SobreComponent,
    ContatoComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CarroselComponent,
    HomeComponent,
    EmpresaComponent,
    GaleriaComponent
  ]
})
export class MenuModule {}
