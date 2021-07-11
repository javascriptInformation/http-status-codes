import { Component, VERSION } from '@angular/core';
import { statusCodeMapping } from './statusCode';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  value1;
  statusCodeMapping = [...statusCodeMapping];

  showDescription = [];

  onInputChange(code) {
    // console.log(this.value1,code);
    this.showDescription = [];
    this.showDescription = this.statusCodeMapping.filter(
      item => item.code === code
    );
    // console.log(this.showDescription);
  }
}
