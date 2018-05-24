import { Component, OnInit, OnChanges, SimpleChange} from '@angular/core';
import { Music } from '../models/music';
import { Artist } from '../models/artist';
import { Genre } from '../models/genre';
import { MusicService } from '../services/music.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material';
import { MusicEditComponent } from 'src/app/musics/music-details/music-edit/music-edit.component';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.css']
})

export class MusicDetailsComponent implements OnInit {

  private music : Music;

  constructor(
    private route : ActivatedRoute,
    private musicService: MusicService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.params
        .subscribe(params => {
            let id = +params['id'];
            this.musicService.get(id)
                .subscribe((music : Music) =>{
                    this.music = music;
                })
    });
  }

  onClickEdit() : void{
    let dialogRef = this. dialog.open(MusicEditComponent, {
      width: '75vw',
      data: this.music.name,
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(name => {
      console.log('Dialog closed');
      console.log(name);
      this.music.name = name;
      this.updateMusic(this.music);
    });
  }

  private updateMusic(music : Music) : void {
    this.musicService.update(music)
      .subscribe(data => {
        console.log(data);
      });
  }

}
