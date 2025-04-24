import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MusicService } from './services/music.service';
import { Music } from './models/music.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tutoriais';
  minhaMusicaSelecionada!: Music;

  // musicas: Music[] = [];
  musicas$ = new Observable<Music[]>();

  id = '';
  musica = '';
  autor = '';



  constructor(private MusicService: MusicService) {
    this.obterMusicasCadastradas();
  }

  obterMusicasCadastradas(){
    // this.Musicservice.obterMusicas()
    // .subscribe(musicas => this.musicas = musicas);

    this.musicas$ = this.MusicService.obterMusicas();
  }

  buttonClick(){
    if (!this.musica || !this.autor) 
      return;

    if(this.id){
      this.atualizar();
      return;
    }

      this.MusicService.cadastrarMusica({ author: this.autor, text: this.musica })
      .subscribe(() => this.obterMusicasCadastradas());
  }

  atualizar(){
    this.MusicService.editarMusica({ id: parseInt(this.id), author: this.autor, text: this.musica })
    .subscribe(() => this.obterMusicasCadastradas());
  }

  preencherCampos(musica: Music){
    this.id = musica.id!.toString();
    this.musica = musica.text;
    this.autor = musica.author;

  }

  remover(id: number){
    this.MusicService.remover(id)
    .subscribe(() => this.obterMusicasCadastradas());
  }

  selecionar(musica: Music) {
    this.minhaMusicaSelecionada = musica //função para selecionar a musica que será exibida no componente filho
  }

}
