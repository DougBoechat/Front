import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/componentes/home/home.component';
import { TecnicoCreateComponent } from './views/componentes/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './views/componentes/tecnico/tecnico-delete/tecnico-delete.component';
import { TecnicoReadComponent } from './views/componentes/tecnico/tecnico-read/tecnico-read.component';
import { TecnicoUpdateComponent } from './views/componentes/tecnico/tecnico-update/tecnico-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tecnicos',
    component: TecnicoReadComponent
  },
  {
    path: 'tecnicos/create',
    component: TecnicoCreateComponent
  },
  {
    path: 'tecnicos/update/:id',
    component: TecnicoUpdateComponent
  },
  {
    path: 'tecnicos/delete/:id',
    component: TecnicoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
