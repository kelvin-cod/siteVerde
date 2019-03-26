import { ContatoComponent } from './menu/contato/contato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './menu/empresa/empresa.component';
import { HomeComponent } from './menu/home/home.component';
import { GaleriaComponent } from './menu/galeria/galeria.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'empresa',
    component: EmpresaComponent,
    data: {
      title: 'Empresa'
    }
  },
  {
    path: 'galeria',
    component: GaleriaComponent,
    data: {
      title: 'Galeria'
    }
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
