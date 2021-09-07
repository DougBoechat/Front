import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  tecnico: Tecnico = {
      id: '',
      nome: '',
      cpf: '',
      telefone: ''
  }

  nome = new FormControl('', [Validators.minLength(4)])
  cpf = new FormControl('', [Validators.minLength(11)])
  telefone = new FormControl('', [Validators.minLength(11)])

  constructor(
    private service : TecnicoService,
    private router : Router) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.router.navigate(['tecnicos'])
  }

  create():void {
    this.service.create(this.tecnico).subscribe((resposta) => {
      this.router.navigate(['tecnicos'])
      this.service.message('Técnico criado com sucesso!')
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
