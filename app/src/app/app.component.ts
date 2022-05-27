import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trppProject';

  clicked(event: any): void {
    console.log(event.target)
    console.log(event.target.value) //в данном случае undefined
    console.log(event.keyCode) //в данном случае undefined
  }
}
