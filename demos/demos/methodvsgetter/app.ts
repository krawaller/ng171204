import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p>Value from method: {{ method() }}</p>
    <p>Value from getter: {{ getter   }}</p>
    <p>Value from prop: {{ prop }}</p>
  `
})
export class AppComponent {
  method():string { return 'methodVal' },
  get getter():string { return 'getterVal' },
  prop: string = 'propVal'
}