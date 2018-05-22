import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicRoutingModule } from 'src/app/musics/music-routing.module';
import { MusicItemComponent } from './music-list/music-item/music-item.component';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule
  ],
  declarations: [
    MusicDetailsComponent,
    MusicListComponent,
    MusicItemComponent
  ]
})
export class MusicsModule { 

}
