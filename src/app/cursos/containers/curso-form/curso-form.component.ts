import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AppMaterialModule } from '../../../pasta/app-material/app-material-module';
import { CursosService } from '../../services/cursos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Curso } from '../../model/curso';

@Component({
  selector: 'app-curso-form',
  standalone: true,
  imports: [AppMaterialModule, CommonModule],
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
    private readonly route: ActivatedRoute,
  ) {
    this.form = this.formBuilder.group({
      _id: [''],
      name: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)]],
      category: ['', [
        Validators.required]],
    });
  }

  ngOnInit(): void {
  const curso: Curso | undefined = this.route.snapshot.data['curso'];

    if(curso){
    this.form.setValue({
      _id: curso._id,
      name: curso.name,
      category: curso.category
    });
  }
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

  getErrorMessage(fieldName: string){
    const field = this.form.get(fieldName);

    if (field?.hasError('required')){
      return 'Campo obrigatório';
    }

    if (field?.hasError('minlenght')){
      const requiredLenght = field.errors ? field.errors['minlenght']['requiredlenght']: 5;
      return `Tamanho mínimo precisa ser de ${requiredLenght} caracteres.`;
    }

    if (field?.hasError('maxlenght')){
      const requiredLenght = field.errors ? field.errors['maxlenght']['requiredlenght']: 100;
      return `Tamanho máximo excedido de ${requiredLenght} caracteres.`;
    }

    return 'Campo inválido';
  }

}
