import { Component } from '@angular/core';
import { INoticia } from '../interfaces/inoticia.interfaces';
import { NOTICIAS } from '../db/noticias.db';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.components.html',
  styleUrl: './blog.components.css',
})
export class BlogComponents {
  noticia: INoticia = {titulo: '', urlImagen: '', contenido: '', fecha: ''};
  arrayNoticias: INoticia[] = [];

  constructor(){
    this.arrayNoticias = NOTICIAS;
  }

  guardarNoticia(){

    if(this.noticia.titulo != '' && this.noticia.urlImagen != '' && this.noticia.contenido != '' && this.noticia.fecha != ''){
      this.arrayNoticias.push({...this.noticia})
      console.log(this.arrayNoticias)
      this.noticia = {titulo: '', urlImagen: '', contenido: '', fecha: ''}
    }else{
      alert("Todos los campos deben estar rellenos ")
    }

  }


}
