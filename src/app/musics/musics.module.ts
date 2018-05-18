import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicsComponent } from './musics.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicItemComponent } from './music-item/music-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MusicsComponent,
    MusicDetailsComponent,
    MusicItemComponent
  ]
})
export class MusicsModule { 

}
