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
  @Output() add = new EventEmitter<boolean>();

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(private readonly cursosService: CursosService) { }

  ngOnInit(): void {
    // carregar dados, configurar estado, etc.
   }

  onAdd() {
    this.add.emit(true);
  }

  onDelete(id: number) {
    this.cursosService.delete(id).subscribe(() => {
      this.cursos = this.cursos.filter(curso => curso._id !== id);
    });
  }

}
