import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { AppMaterialModule } from "../../../pasta/app-material/app-material-module";



@Component({
  selector: 'app-confirmation-dialog',
  imports: [
    MatDialogContent,
    MatDialogActions,
    AppMaterialModule
],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  ngOnInit(): void {
    //inserir aqui
  }

onConfirm(result: boolean): void {
    this.dialogRef.close(result);
  }

}
