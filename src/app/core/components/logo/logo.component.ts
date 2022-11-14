import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  public title = 'Video Course';
  constructor() { }

  ngOnInit(): void {
  }

}
