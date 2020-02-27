import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit 
{
  rutas = [
    {
      name: 'Home',
      path: '/Home'
    },
    {
      name: 'Animes',
      path: '/Animes'
    },
    {
      name: 'Mangas',
      path: '/Mangas'
    }
    ,
    {
      name: 'Recomendaciones',
      path: '/Recomendaciones'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
