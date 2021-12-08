import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { pagamento } from 'src/app/models/pagamento';
import { pagamentoService } from 'src/app/services/pagamento.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-pagamento-read',
  templateUrl: './pagamento-read.component.html',
  styleUrls: ['./pagamento-read.component.css']
})
export class PagamentoReadComponent implements AfterViewInit {

  pagamentos: pagamento[] = [];
  dataSource = new MatTableDataSource<pagamento>(this.pagamentos);
  displayedColumns: string[] = ['id_pagamento', 'id_analista', 'taxa', 'v/h_contrato', 'horas_fixas', 'horas_trabalhadas', 'horas_extras', 'pagamento_P/H', 'pagamento_H/E', 'pagamento', 'mes_corrente', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : pagamentoService, 
    private router : Router) {}


  ngAfterViewInit(): void {
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.pagamentos = resposta;
      this.dataSource = new MatTableDataSource<pagamento>(this.pagamentos);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void{
    this.router.navigate(['pagamentos/create'])
  }

}
