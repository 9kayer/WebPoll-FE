import { Component, OnInit } from '@angular/core';
import { Music } from '../models/music';
import { Artist } from '../models/artist';
import { Genre } from '../models/genre';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {

  music : Music = new Music(1, 'Supermassive Black Hole', new Artist(1, 'Muse'), new Genre(1, 'Rock'));

  constructor() { }

  ngOnInit() {
  }

}
