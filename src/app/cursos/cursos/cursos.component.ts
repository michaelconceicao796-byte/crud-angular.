import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CategoryPipe } from '../../pasta/pipes/category-pipe';
import { ReactiveFormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../pasta/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

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
    CategoryPipe,
    ReactiveFormsModule,

  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent implements OnInit {
  readonly cursos$!: Observable<Curso[]>;
  readonly displayedColumns = ['name','category','actions'];

  // cursosService: CursosService;

  constructor(
    private readonly cursosService: CursosService,
    private readonly dialog: MatDialog,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    // this.cursos = []
    // this.cursosService = new CursosService();
    this.cursos$ = this.cursosService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos');
        return of([])
      })
    );

    // this.cursosService.list().subscribe(cursos => this.cursos = cursos);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

ngOnInit(): void {
  // this.onError('Erro ao carregar cursos.');
}

onAdd(){
  this.router.navigate(['/cursos/new'], {relativeTo: this.route});
}
}
