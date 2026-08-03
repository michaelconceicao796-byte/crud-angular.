import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Curso } from '../model/curso';
import { MatCard, MatCardHeader, MatCardContent } from "@angular/material/card";
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [MatTableModule, MatCard, MatToolbarModule, MatCardHeader, MatCardContent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {

  displayedColumns = ['name', 'category'];

  cursos = [
    { name: 'Angular', category: 'Front-end' },
    { name: 'Type Script', category: 'Linguagem' }
  ];

  constructor() {}

  ngOnInit(): void {
  }
}
