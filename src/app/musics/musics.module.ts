import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';

import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicRoutingModule } from 'src/app/musics/music-routing.module';
import { MusicItemComponent } from './music-list/music-item/music-item.component';
import { MusicEditComponent } from './music-details/music-edit/music-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MusicRoutingModule
  ],
  declarations: [
    MusicDetailsComponent,
    MusicListComponent,
    MusicItemComponent,
    MusicEditComponent
  ],
  entryComponents:[
    MusicEditComponent
  ],
  providers:[
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class MusicsModule { 

}
