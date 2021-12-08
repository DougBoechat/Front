import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/componentes/home/home.component';
import { AnalistaCreateComponent } from './views/componentes/analista/analista-create/analista-create.component';
import { AnalistaDeleteComponent } from './views/componentes/analista/analista-delete/analista-delete.component';
import { AnalistaReadComponent } from './views/componentes/analista/analista-read/analista-read.component';
import { AnalistaUpdateComponent } from './views/componentes/analista/analista-update/analista-update.component';
import {PagamentoReadComponent} from './views/componentes/pagamento/pagamento-read/pagamento-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'analistas',
    component: AnalistaReadComponent
  },
  {
    path: 'analistas/create',
    component: AnalistaCreateComponent
  },
  {
    path: 'analistas/update/:id',
    component: AnalistaUpdateComponent
  },
  {
    path: 'analistas/delete/:id',
    component: AnalistaDeleteComponent
  },
  {
    path: 'pagamentos',
    component: PagamentoReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
