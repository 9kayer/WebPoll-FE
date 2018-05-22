import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicDetailsComponent } from './music-details/music-details.component';

const routes: Routes = [
  { path: 'musics', component: MusicListComponent },
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
