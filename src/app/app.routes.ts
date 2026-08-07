import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos/cursos.component';
import { CursoFormComponent } from './cursos/curso-form/curso-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cursos',
    component: CursosComponent
  },
  {
    path: 'cursos/new',
    component: CursoFormComponent
  }
];
