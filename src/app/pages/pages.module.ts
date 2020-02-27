import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AnimeComponent } from './anime/anime.component';
import { MangaComponent } from './manga/manga.component';

@NgModule({
  declarations: 
  [
    HomeComponent,
    AnimeComponent,
    MangaComponent
  ],
  
  exports:
  [
    HomeComponent,
    AnimeComponent,
    MangaComponent
  ],

  imports: 
  [
    CommonModule
  ]
})
export class PagesModule { }
