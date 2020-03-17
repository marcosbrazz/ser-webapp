import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sknet-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logoSrc = 'assets/images/terminator.png'

  constructor() { }

  ngOnInit() {
  }

}
