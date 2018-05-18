import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { MusicsModule } from './musics/musics.module';

import { AppComponent } from './app.component';
import { MessagesComponent } from './shared/messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MusicsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
