import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent implements OnInit {

  id_tec = ''

  tecnico: Tecnico = 
  {
    id: '',
    nome: '',
    cpf: '',
    telefone: ''
}

  constructor(private service : TecnicoService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_tec = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById():void {
    this.service.findById(this.id_tec).subscribe((resposta) => {
      this.tecnico = resposta;
    })
  }

  cancel():void{
    this.router.navigate(['tecnicos'])
  }

  delete():void {
    this.service.delete(this.tecnico).subscribe((resposta) => {
      this.router.navigate(['tecnicos'])
      this.service.message('Técnico removido com sucesso!')
    })
  }

}
