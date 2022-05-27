import { Component, Inject } from '@angular/core';
import { DialogRef } from '../dialog/dialog-ref';
import { DIALOG_DATA } from '../dialog/dialog-tokens';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: string
  ) {}

  close() {
    this.dialogRef.close();
  }
}
