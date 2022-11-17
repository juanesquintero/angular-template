import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ws-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';

  public username = 'User login';

  constructor() {}

  ngOnInit(): void {
  }

}
