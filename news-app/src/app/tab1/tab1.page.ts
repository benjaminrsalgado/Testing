import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { NoticiasService } from '../services/noticias';

interface Noticia {
  id?: string;
  titulo: string;
  descripcion: string;
  fecha: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  noticias$: Observable<Noticia[]>;

  constructor(private readonly noticiasService: NoticiasService) {
    this.noticias$ = this.noticiasService.getNoticias() as Observable<Noticia[]>;
  }

  async eliminarNoticia(id?: string) {
    if (!id) {
      return;
    }

    try {
      await this.noticiasService.deleteNoticia(id);
    } catch (err) {
      console.error('No se pudo eliminar la noticia', err);
    }
  }
}
