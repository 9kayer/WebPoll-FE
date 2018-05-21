import { Component, OnInit } from '@angular/core';
import { Music } from '../models/music';
import { Artist } from '../models/artist';
import { Genre } from '../models/genre';
import { MockMusicService } from '../services/mock-musics.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.css']
})

export class MusicDetailsComponent implements OnInit {

  private music : Music;

  constructor(
    private route : ActivatedRoute,
    private musicService: MockMusicService
  ) { }

  ngOnInit() {
    this.route.params
        .subscribe(params => {
            let id = +params['id'];
            this.musicService.get(id)
                .subscribe(music =>{
                    this.music = music;
                })
    });
  }

}
