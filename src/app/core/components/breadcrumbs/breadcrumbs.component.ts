import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'ws-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }

  get path(): string {
    return (this.activeRoute?.title || this.activeRoute?.path) as string;
  }

  get activeRoute(): Route {
    return this.router.config.filter(route => route.path == this.currentPath)[0];
  }

  get currentPath(): any {
    return this.router.parseUrl(this.router.url).toString().replace('/', '');
  }

  get currentPathBeautified(): any {
    return this.currentPath.replace('/', ' / ');
  }
}
