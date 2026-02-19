import { Component } from '@angular/core';
import { INoticia } from '../interfaces/inoticia.interfaces';
import { NOTICIAS } from '../db/noticias.db';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.components.html',
  styleUrl: './blog.components.css',
})
export class BlogComponents {
  arrayNoticias: INoticia[] = [];

  constructor(){
    this.arrayNoticias = NOTICIAS;
  }


}
