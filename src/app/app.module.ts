import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HeaderComponent } from './views/componentes/template/header/header.component';
import { FooterComponent } from './views/componentes/template/footer/footer.component';
import { NavComponent } from './views/componentes/template/nav/nav.component';
import { HomeComponent } from './views/componentes/home/home.component';
import { AnalistaReadComponent } from './views/componentes/analista/analista-read/analista-read.component';
import { AnalistaCreateComponent } from './views/componentes/analista/analista-create/analista-create.component';
import { AnalistaUpdateComponent } from './views/componentes/analista/analista-update/analista-update.component';
import { AnalistaDeleteComponent } from './views/componentes/analista/analista-delete/analista-delete.component';
import { PagamentoCreateComponent } from './views/componentes/pagamento/pagamento-create/pagamento-create.component';
import { PagamentoReadComponent } from './views/componentes/pagamento/pagamento-read/pagamento-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AnalistaReadComponent,
    AnalistaCreateComponent,
    AnalistaUpdateComponent,
    AnalistaDeleteComponent,
    PagamentoCreateComponent,
    PagamentoReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
