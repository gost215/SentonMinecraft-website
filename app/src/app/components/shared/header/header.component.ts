import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  clicked(event: any): void {
    console.log(event.target)
    console.log(event.target.value) //в данном случае undefined
    console.log(event.keyCode) //в данном случае undefined
  }
}
