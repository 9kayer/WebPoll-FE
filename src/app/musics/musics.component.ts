import { Component, OnInit } from '@angular/core';
import { Music } from './models/music';
import { Artist } from './models/artist';
import { Genre } from './models/genre';
import { MusicService } from 'src/app/musics/services/musics.service';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {

  private musicList : Music[];

  constructor() { 
    this.getAllMusics();
  }

  ngOnInit() {
    this.getAllMusics();
  }

  getAllMusics(){
    this.musicList = MusicService.prototype.getAll();
  }

}
