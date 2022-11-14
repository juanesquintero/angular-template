import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  public route = 'courses';

  constructor() { }

  ngOnInit(): void {
  }

}
