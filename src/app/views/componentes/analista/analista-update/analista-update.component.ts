import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { analista } from 'src/app/models/analista';
import { analistaService } from 'src/app/services/analista.service';

@Component({
  selector: 'app-analista-update',
  templateUrl: './analista-update.component.html',
  styleUrls: ['./analista-update.component.css']
})
export class AnalistaUpdateComponent implements OnInit {

  id_tec = ''

  analista: analista = 
  {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
    salario: 0
}

nome = new FormControl('', [Validators.minLength(4)])
cpf = new FormControl('', [Validators.minLength(11)])
telefone = new FormControl('', [Validators.minLength(11)])
salario = new FormControl('', [Validators.minLength(3)])

  

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

  update():void {
    this.service.update(this.analista).subscribe((resposta) => {
      this.router.navigate(['analistas'])
      this.service.message('Analista atualizado com sucesso!')
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
