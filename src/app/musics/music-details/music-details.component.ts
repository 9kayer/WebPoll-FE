import { Component, OnInit, Input } from '@angular/core';
import { Music } from '../models/music';
import { Artist } from '../models/artist';
import { Genre } from '../models/genre';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.css']
})

export class MusicDetailsComponent implements OnInit {

  @Input() music : Music;

  constructor() { }

  ngOnInit() {
  }

}
