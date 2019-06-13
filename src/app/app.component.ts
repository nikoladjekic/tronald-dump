import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ouch: string = '';
  status: boolean = false;

  sayOuch() {
    this.ouch = 'Oouch!';
    setTimeout(() => {
      this.ouch = 'That hurst!';
      this.status = false;
    }, 1300);
    setTimeout(() => {
      this.ouch = '';
    }, 2600);
  }  

}
