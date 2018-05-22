import { Component, OnInit } from '@angular/core';
import { Music } from '../models/music';
import { Artist } from '../models/artist';
import { Genre } from '../models/genre';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  private musicList : Music[];

  constructor(private musicService : MusicService) { 
  }

  ngOnInit() {
    this.getAllMusics();
  }

  getAllMusics() : void {
    this.musicService.getAll()
          .subscribe((data : Music[]) => this.musicList = data.sort((a,b) => a.id <= b.id ? 0 : 1));
  }
}
