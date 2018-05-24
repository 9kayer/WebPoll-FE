import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-music-edit',
  templateUrl: './music-edit.component.html',
  styleUrls: ['./music-edit.component.css']
})
export class MusicEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MusicEditComponent>,
    @Inject(MAT_DIALOG_DATA) public name: string) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onUpdateClick() : void{
    this.dialogRef.close();
  }

}
