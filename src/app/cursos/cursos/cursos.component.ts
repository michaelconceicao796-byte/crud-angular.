import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [MatTableModule, MatCard, MatCardHeader, MatCardContent, MatToolbarModule, MatProgressSpinner, CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent implements OnInit {
  cursos$!: Observable<Curso[]>;
  displayedColumns = ['name', 'category'];

  // cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    // this.cursos = []
    // this.cursosService = new CursosService();
    this.cursos$ = this.cursosService.list();

    // this.cursosService.list().subscribe(cursos => this.cursos = cursos);
  }

  ngOnInit(): void {}
}
