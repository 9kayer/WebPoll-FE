import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MusicItemComponent } from './music-item/music-item.component';
import { MusicDetailsComponent } from './music-details/music-details.component';

const routes: Routes = [
  { path: 'musics', component: MusicItemComponent },
  { path: 'musics/:id', component: MusicDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class MusicRoutingModule { }
