import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppMaterialModule } from "../../pasta/app-material/app-material-module";
import { CursosService } from '../services/cursos.service';
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

  constructor(private readonly formBuilder: FormBuilder,
    private readonly service: CursosService,
    private readonly snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {
    // Initialize component
  }

  onSubmit(): void {
    this.service.save(this.form.value)
      .subscribe({next: (result) => console.log(result), error: () => this.onError()
      });
  }

  onCancel(): void {
    this.form.reset();
  }

  private onError() {
      this.snackBar.open ('Erro ao salvar curso.', '', {duration: 3000});
  }
}

