import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material-module';
import { CategoryPipe } from './pipes/category-pipe';

@NgModule({
  imports: [CommonModule, ErrorDialogComponent, AppMaterialModule, CategoryPipe],
  exports: [ErrorDialogComponent, CategoryPipe]
})
export class PastaModule {}
