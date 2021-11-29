import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { analista } from 'src/app/models/analista';
import { analistaService } from 'src/app/services/analista.service';

@Component({
  selector: 'app-analista-read',
  templateUrl: './analista-read.component.html',
  styleUrls: ['./analista-read.component.css']
})
export class AnalistaReadComponent implements AfterViewInit {

  analistas: analista[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'salario', 'action'];
  dataSource = new MatTableDataSource<analista>(this.analistas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : analistaService, 
    private router : Router) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.analistas = resposta;
      this.dataSource = new MatTableDataSource<analista>(this.analistas);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void{
    this.router.navigate(['analistas/create'])
  }

}
