import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { analista } from 'src/app/models/analista';
import { analistaService } from 'src/app/services/analista.service';

@Component({
  selector: 'app-analista-delete',
  templateUrl: './analista-delete.component.html',
  styleUrls: ['./analista-delete.component.css']
})
export class AnalistaDeleteComponent implements OnInit {

  id_tec = ''

  analista: analista = 
  {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
    salario: 0
}

  constructor(private service : analistaService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_tec = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById():void {
    this.service.findById(this.id_tec).subscribe((resposta) => {
      this.analista = resposta;
    })
  }

  cancel():void{
    this.router.navigate(['analistas'])
  }

  delete():void {
    this.service.delete(this.analista).subscribe((resposta) => {
      this.router.navigate(['analistas'])
      this.service.message('Analista removido com sucesso!')
    })
  }

}
