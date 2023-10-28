import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CorrentistaService } from '../correntista.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent {

  constructor(
    private router: Router,
    private service: CorrentistaService,
    private message: MessageService
  ) {}

  usuario = "";
  senha = "";

  entrarSistema() {

    this.service.login(this.usuario)
    .subscribe(
      (response) => {
        if(response.id != null) {
          this.service.dadosUsuario = response;
          this.router.navigate(['principal']);
        } else {
          this.message.add({severity: 'warn', summary: 'alert', detail:'Login incorreto!'});
        }
      }
    )
  }
}
