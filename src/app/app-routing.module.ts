import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MusicsComponent } from './musics/musics.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'musics', component: MusicsComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { 

}


