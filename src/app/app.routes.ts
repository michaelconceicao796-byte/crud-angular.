import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/containers/cursos/cursos.component';
import { CursoFormComponent } from './cursos/containers/curso-form/curso-form.component';
import { CursoResolver } from './cursos/resolvers/curso.resolver';

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
  },
  {
    path: 'cursos/edit/:id',
    component: CursoFormComponent,
    resolve: {
      curso: CursoResolver
    }
  }
];
