import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { MusicDetailsComponent } from '../music-details/music-details.component';
import { Music } from '../models/music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  baseURL = 'http://localhost:10000/api';
  musicURL = '/musics';

  constructor(private http : HttpClient) { }

  getAll() : Observable<Music[]>{
      return this.http.get<Music[]>(this.baseURL + this.musicURL);          
  }

  get(id : number) : Observable<Music>{
      return this.http.get<Music>(this.baseURL + this.musicURL + '/' + id);
  }
}
