import { Component, OnInit } from '@angular/core';
import { Music } from './models/music';
import { Artist } from './models/artist';
import { Genre } from './models/genre';
import { MockMusicService } from 'src/app/musics/services/mock-musics.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

}
