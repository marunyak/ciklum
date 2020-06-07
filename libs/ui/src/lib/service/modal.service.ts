import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../component/alert/alert.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  navigateAwaySelection$: Subject<boolean> = new Subject<boolean>();

  constructor(public dialog: MatDialog) { }

  openErrorModal() {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '300px',
      data: ''
    });
  }
}
