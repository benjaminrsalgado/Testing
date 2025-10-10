import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  private readonly firestore = inject(Firestore);

  addNoticia(noticia: { titulo: string; descripcion: string; fecha: string }) {
    const noticiasCollection = collection(this.firestore, 'noticias');
    return addDoc(noticiasCollection, noticia);
  }

  getNoticias() {
    const noticiasCollection = collection(this.firestore, 'noticias');
    return collectionData(noticiasCollection, { idField: 'id' });
  }

  deleteNoticia(id: string) {
    const noticiaDoc = doc(this.firestore, `noticias/${id}`);
    return deleteDoc(noticiaDoc);
  }
}
