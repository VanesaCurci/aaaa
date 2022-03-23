import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './vistas/contacto/contacto.component';
import { InformacionComponent } from './vistas/informacion/informacion.component';
import { InicioComponent } from './vistas/inicio/inicio.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'informacion', component: InformacionComponent},
  {path:'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
