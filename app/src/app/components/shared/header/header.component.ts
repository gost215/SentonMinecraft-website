import {Component} from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {DialogService} from "../dialog/dialog.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dialog: DialogService) {}

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent, { data: 'John' });

    dialogRef.afterClosed().subscribe(() => {
      // Subscription runs after the dialog closes
      console.log('Dialog closed!');
    });
  }
}
