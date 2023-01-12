import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ntap-botoes-filtro',
  templateUrl: './botoes-filtro.component.html',
  styleUrls: ['./botoes-filtro.component.scss']
})
export class BotoesFiltroComponent {

  @Output() filtrar = new EventEmitter<string>

  enviarFiltro(filtro : string){
    this.filtrar.emit(filtro)
  }
}