import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sknet-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logoSrc = 'assets/images/terminator.png'

  constructor() { }

  ngOnInit() {
  }

}
