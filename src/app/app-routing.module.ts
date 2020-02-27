import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { MangaComponent } from './pages/manga/manga.component';
import { PostsModule } from './pages/posts/posts.module';



const routes: Routes = 
[
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Animes',
    component: AnimeComponent
  },
  {
    path: 'Mangas',
    component: MangaComponent
  },
  {
    path: 'Recomendaciones',
    loadChildren: './pages/posts/posts.module#PostsModule'
  },
  {
    path: '***',
    redirectTo: 'Home'
  }
];

@NgModule({
  imports:
  [
    RouterModule.forRoot( routes)
  ],
  exports:
  [
    RouterModule
  ]
})
export class AppRoutingModule{}