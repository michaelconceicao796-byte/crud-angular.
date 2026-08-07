import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppMaterialModule } from "../../pasta/app-material/app-material-module";

@Component({
  selector: 'app-curso-form',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './curso-form.component.html',
  styleUrl: './curso-form.component.scss',
})
export class CursoFormComponent implements OnInit {

  form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {
    // Initialize component
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  onCancel(): void {
    this.form.reset();
  }
}

