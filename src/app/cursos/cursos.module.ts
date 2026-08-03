import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing-module';
import { AppMaterialModule } from '../pasta/app-material/app-material-module';


@NgModule({
  declarations: [],
  imports: [CommonModule,
     CursosRoutingModule,
      AppMaterialModule],
})
export class CursosModule {}
