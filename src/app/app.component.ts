import { Component } from '@angular/core';

@Component({
  selector: 'sknet-root',
  template: `
    <sknet-header></sknet-header>
    <router-outlet></router-outlet>
    <sknet-footer></sknet-footer>`
})
export class AppComponent {
  constructor() { }
}
