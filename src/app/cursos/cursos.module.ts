import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing-module';
import { AppMaterialModule } from '../pasta/app-material/app-material-module';
import { PastaModule } from '../pasta/pasta-module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule,
    PastaModule,
    ReactiveFormsModule
  ]
})
export class CursosModule {}
