import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Curso } from '../model/curso';
import { first, tap } from 'rxjs/operators';

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
      tap(cursos => console.log(cursos))
    );
  }
  save(record: Curso) {
    return this.httpClient.post<Curso>(this.API, record);
  }
}

