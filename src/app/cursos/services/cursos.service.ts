import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Curso } from '../model/curso';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

private readonly API = '/cursos.json';

  constructor(private readonly httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Curso[]>(this.API).pipe(
      first(),
      delay(3000),
      tap(cursos => console.log(cursos))
    );
  }
}

