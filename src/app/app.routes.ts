import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [];

@NgModule({
  declarations: [],

  imports: [
    MatToolbarModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
