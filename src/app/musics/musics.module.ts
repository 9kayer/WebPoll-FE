import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicItemComponent } from './music-item/music-item.component';
import { MusicRoutingModule } from 'src/app/musics/music-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule
  ],
  declarations: [
    MusicDetailsComponent,
    MusicItemComponent
  ]
})
export class MusicsModule { 

}
