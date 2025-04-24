import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Music } from "../models/music.model";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private url = `${environment.api}/musics`;

  constructor(private httpClient: HttpClient) {
  }

  obterMusicas() {
    //return this.httpClient.get<Music[]>(this.url);
    return of(
       [
        {
          "id": 2,
          "author": "AC/DC",
          "text": "Highway to Hell"
        },
        {
          "id": 3,
          "author": "Led Zeppelin",
          "text": "Whole Lotta Love"
        },
        {
          "id": 5,
          "author": "Van Halen",
          "text": "Jump"
        },
        {
          "id": 6,
          "author": "Deep Purple",
          "text": "Smoke on the Water"
        },
        {
          "id": 7,
          "author": "teste",
          "text": "teste"
        }
      ]
    ) as Observable<Music[]>
  } 

  cadastrarMusica(musica: Music){
    return this.httpClient.post<Music>(this.url, musica);

  }

  editarMusica(musica: Music){
    return this.httpClient.put<Music>(`${this.url}/${musica.id}`, musica);

  }
  remover(id: number){
    return this.httpClient.delete<void>(`${environment.api}/musics/${id}`)
  }


}