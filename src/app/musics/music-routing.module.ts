import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MusicsComponent } from './musics.component';

const routes: Routes = [
  { path: '/musics', component: MusicsComponent },
  { path: '/musics/:id', component: MusicsComponent }
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
