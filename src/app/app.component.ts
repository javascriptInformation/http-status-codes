import { Component, VERSION } from '@angular/core';
import { statusCodeMapping } from './statusCode';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  value1 = 100;
  statusCodeMapping = [...statusCodeMapping];

  showDescription = [];

  onInputChange() {
    console.log(this.value1);
    this.showDescription = [];
    this.showDescription = this.statusCodeMapping.filter(
      item => item.code === this.value1
    );
    console.log(this.showDescription);
  }
}
