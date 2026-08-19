import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Curso } from '../model/curso';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

private readonly API = 'api/cursos';

  constructor(private readonly httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Curso[]>(this.API).pipe(
      first(),
      //delay(3000),
      //tap(cursos => console.log(cursos))
    );
  }

  loadById(id: string) {
    return this.httpClient.get<Curso>(`${this.API}/${id}`);
  }

  save(record: Partial<Curso>) {
    //console.log(record);
    if (record._id){
      //console.log('update');
      return this.update(record);
    }
    //console.log('create');
    return this.create(record);
  }

  private create(record: Partial<Curso>){
    return this.httpClient.post<Curso>(this.API, record).pipe(first());
  }

  private update(record: Partial<Curso>){
     return this.httpClient.put<Curso>(`${this.API}/${record._id}`, record).pipe(first());
  }

  delete(id: string) {
  return this.httpClient.delete(`${this.API}/${id}`);
}

}
