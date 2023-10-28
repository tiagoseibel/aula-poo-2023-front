import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from '../correntista.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 
  public cpf: string = "";

  constructor(
    private service: CorrentistaService
  ){}

  ngOnInit(): void {
    this.cpf = this.service.dadosUsuario.cpf;
  }
}
