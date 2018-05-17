import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusicsComponent } from './musics/musics.component';

const routes: Routes = [
  { path: 'musics', component: MusicsComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { 

}


