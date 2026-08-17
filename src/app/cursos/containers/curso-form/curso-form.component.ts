import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { AppMaterialModule } from '../../../pasta/app-material/app-material-module';
import { CursosService } from '../../services/cursos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-curso-form',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './curso-form.component.html',
  styleUrl: './curso-form.component.scss',
})
export class CursoFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly service: CursosService,
    private readonly snackBar: MatSnackBar,
    private readonly location: Location,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      category: [''],
    });
  }

  ngOnInit(): void {
    //inicialize aqui
  }

  onSubmit(): void {
    this.service
      .save(this.form.value)
      .subscribe({ next: (result) => this.onSuccess(), error: () => this.onError() });
  }

  onCancel(): void {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 3000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 3000 });
  }
}
