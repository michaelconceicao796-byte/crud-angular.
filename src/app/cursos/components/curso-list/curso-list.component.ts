import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../../model/curso';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { CategoryPipe } from '../../../pasta/pipes/category-pipe';
import { CursosService } from '../../services/cursos.service';
import { AppMaterialModule } from "../../../pasta/app-material/app-material-module";


@Component({
  selector: 'app-curso-list',
  standalone: true,
  imports: [MatTableModule, MatIcon, CategoryPipe, AppMaterialModule],
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.scss',
})
export class CursoListComponent implements OnInit {

  @Input() cursos: Curso[] = [];
  
  @Output() add = new EventEmitter<void>();
  @Output() edit = new EventEmitter<Curso>();
  @Output() delete = new EventEmitter<string>();

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(private readonly cursosService: CursosService) { }

  ngOnInit(): void {
    // carregar dados, configurar estado, etc.
   }

  onAdd() {
    this.add.emit();
  }

  onEdit(curso: Curso) {
    console.log('Curso para editar:', curso);
    this.edit.emit(curso);
  }

  onDelete(id: string) {
    this.delete.emit(id);
  }

}
