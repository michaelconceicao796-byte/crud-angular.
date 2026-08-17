import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from '../../../pasta/components/error-dialog/error-dialog.component';
import { Curso } from '../../model/curso';
import { CursosService } from '../../services/cursos.service';
import { CursoListComponent } from "../../components/curso-list/curso-list.component";

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    MatTableModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatToolbarModule,
    MatProgressSpinner,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    CursoListComponent
],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent implements OnInit {

  cursos$!: Observable<Curso[]>;
  // cursos: Curso[] = [];

  // cursosService: CursosService;

  constructor(
    private readonly cursosService: CursosService,
    private readonly dialog: MatDialog,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    // this.cursos = []
    // this.cursosService = new CursosService();
    this.cursos$ = this.cursosService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos');
        return of([]);
      }),
    );

    // this.cursosService.list().subscribe(cursos => this.cursos = cursos);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {
    // this.onError('Erro ao carregar cursos.');
  }

  onAdd() {
    this.router.navigate(['/cursos/new'], { relativeTo: this.route });
  }

  onDelete(curso: Curso): void {
    if (confirm(`Deseja remover o curso ${curso.name}?`)) {
      this.cursosService.delete(curso._id).subscribe({
        next: () => {
          this.cursos$ = this.cursosService.list();
        },
        error: () => {
          this.onError('Erro ao remover curso');
        },
      });
    }
  }
}
