import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../model/curso';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { CategoryPipe } from '../../pasta/pipes/category-pipe';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-curso-list',
  imports: [MatTableModule, MatIcon, CategoryPipe],
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.scss',
})
export class CursoListComponent implements OnInit {
  @Input() cursos: Curso[] = [];

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly cursosService: CursosService,
  ) {}

  ngOnInit(): void {
    this.loadCursos();
  }

  private loadCursos(): void {
    this.cursosService.list().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  onAdd(): void {
    this.router.navigate(['/cursos/new'], { relativeTo: this.route });
  }

  onDelete(curso: Curso): void {
    if (confirm(`Deseja remover o curso ${curso.name}?`)) {
      this.cursosService.delete(curso._id).subscribe({
        next: () => this.loadCursos(),
        error: () => alert('Erro ao remover curso'),
      });
    }
  }
}
