import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Music } from 'src/app/models/music.model';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
    standalone: false
})
export class TopBarComponent {
 @Input('music') musicaSelecionada!: Music; //recebendo dados do componente pai
 @Output() destacar = new EventEmitter<boolean>(); //enviando dados para o componente pai
 

 destacarMusica(musicaSelecionada: Music) {
  musicaSelecionada.destacada = !musicaSelecionada.destacada
  this.destacar.emit(musicaSelecionada.destacada) 
 }
}
