import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.css']
})
export class TecnicoUpdateComponent implements OnInit {

  id_tec = ''

  tecnico: Tecnico = 
  {
    id: '',
    nome: '',
    cpf: '',
    telefone: ''
}

nome = new FormControl('', [Validators.minLength(4)])
cpf = new FormControl('', [Validators.minLength(11)])
telefone = new FormControl('', [Validators.minLength(11)])

  

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

  update():void {
    this.service.update(this.tecnico).subscribe((resposta) => {
      this.router.navigate(['tecnicos'])
      this.service.message('Técnico atualizado com sucesso!')
    })
  }

  errorValidName() {
    if (this.nome.invalid){
      return 'O nome deve ter entre 5 e 100 caracteres';
    }
    return false;
  }

  errorValidCpf() {
    if (this.cpf.invalid){
      return 'O cpf deve ter 11 caracteres';
    }
    return false;
  }

  errorValidTelefone() {
    if (this.telefone.invalid){
      return 'O telefone deve ter 11 caracteres';
    }
    return false;
  }

}
