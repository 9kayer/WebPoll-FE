import { Component, OnInit, Input } from '@angular/core';
import { Music } from '../../models/music';

@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.css']
})
export class MusicItemComponent implements OnInit {

  @Input() music : Music;

  constructor() { }

  ngOnInit() {
  }

}
