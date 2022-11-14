import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public username = 'User login';
  constructor() { }

  ngOnInit(): void {
  }

}
