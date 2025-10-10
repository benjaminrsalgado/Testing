import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  constructor(private firestore: AngularFirestore) {}

  addNoticia(noticia: { titulo: string; descripcion: string; fecha: string }) {
    return this.firestore.collection('noticias').add(noticia);
  }

  getNoticias() {
    return this.firestore
      .collection('noticias')
      .valueChanges({ idField: 'id' });
  }

  deleteNoticia(id: string) {
    return this.firestore.collection('noticias').doc(id).delete();
  }
}
