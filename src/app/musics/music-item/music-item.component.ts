import { Component, OnInit } from '@angular/core';
import { Music } from '../models/music';
import { Artist } from '../models/artist';
import { Genre } from '../models/genre';
import { MockMusicService } from '../services/mock-musics.service';

@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.css']
})
export class MusicItemComponent implements OnInit {

  private musicList : Music[];

  selectedMusic : Music;

  constructor(private musicService : MockMusicService) { 
  }

  ngOnInit() {
    this.getAllMusics();
  }

  getAllMusics() : void {
    this.musicService.getAll()
          .subscribe(musicList => this.musicList = musicList);
  }

  onSelect(music : Music) : void{
    this.selectedMusic = music;
  }

}
