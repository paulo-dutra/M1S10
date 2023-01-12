import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INotificacao } from 'src/app/models/notificacao.model';
import { NOTIFICATIONS_MOCK } from 'src/app/utils/notifications-mock';

@Component({
  selector: 'ntap-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

  }
  listaDeNotificacoes: INotificacao[] = [];
  listaFiltrada: INotificacao[] = [];

  ngOnInit(): void {
    this.listaDeNotificacoes = NOTIFICATIONS_MOCK;
    this.route.params.subscribe((params) => this.atualizarConteudo(params['filtro']));
}

atualizarConteudo(filtro: string){
  if (filtro === undefined){
    filtro = 'todos'
  }
  let lido: boolean
  this.listaFiltrada=[]
      switch (filtro) {
        case 'todos':
          this.listaFiltrada = this.listaDeNotificacoes
          return
        case 'nao-lidos':
          lido = false
          break;
        case 'lidos':
          lido = true
          break;
      }
      this.listaDeNotificacoes.forEach(element => {
        if (element.lido == lido) {
          this.listaFiltrada.push(element)
        }
      });
}

lerNotificacao(indice: number) {
  console.log('indice', indice);

  this.listaDeNotificacoes.forEach((item, index) => {
    if (index === indice) {
      item.lido = true;
    }

    return item;
  });
}

filtragem(valorFiltro: string) {
  this.router.navigate(['/home/', valorFiltro])
}
}
