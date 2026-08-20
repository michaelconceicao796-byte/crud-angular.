import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBar} from '@angular/material/snack-bar';

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
    CursoListComponent,
    MatInputModule,
],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]> | null = null;
  // cursos: Curso[] = [];

  // cursosService: CursosService;

  constructor(
    private readonly cursosService: CursosService,
    private readonly dialog: MatDialog,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly snackBar: MatSnackBar,
  ) {
    // this.cursos = []
    // this.cursosService = new CursosService();
    this.refresh();


    // this.cursosService.list().subscribe(cursos => this.cursos = cursos);
  }

  refresh(){
    this.cursos$ = this.cursosService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos');
        return of([]);
      })
    );
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

  onEdit(curso: Curso) {
    console.log('ID do curso:', curso._id);
    this.router.navigate(['/cursos/edit', curso._id]);
  }

  onDelete(curso: Curso) {
  console.log('CURSO RECEBIDO NO PAI:', curso);
  console.log('ID RECEBIDO NO PAI:', curso._id);

  this.cursosService.delete(curso._id).subscribe({
    next: () => {
      console.log('DELETE REALIZADO COM SUCESSO');

      this.refresh();

      this.snackBar.open('Curso deletado com sucesso!', 'X', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    },
    error: (err) => {
      console.error('ERRO NO DELETE:', err);
      this.onError('Erro ao tentar remover curso.');
    }
  });
}
}
