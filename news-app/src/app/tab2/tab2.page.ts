import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NoticiasService } from '../services/noticias';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Tab2Page {
  titulo: string = '';
  descripcion: string = '';
  fecha: string | null | undefined;

  constructor(private noticiasService: NoticiasService) {}

  agregarNoticia() {
    if (!this.titulo ||  !this.descripcion || !this.fecha) {
      alert('Completa todos los campos.');
      return;
    }

    const noticia = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      fecha: this.fecha as string,
    };

    console.log('Noticia a guardar:', noticia);

    this.noticiasService
      .addNoticia(noticia)
      .then(() => {
        alert('Noticia agregada exitosamente.');
        this.titulo = '';
        this.descripcion = '';
        this.fecha = '';
      })
      .catch((err) => console.error('No se pudo agregar noticia, error:', err));
  }
}