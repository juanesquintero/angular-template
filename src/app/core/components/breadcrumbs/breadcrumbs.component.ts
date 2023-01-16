import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'ws-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  private activedRoute?: ActivatedRoute | null;

  get params(): any {
    return this.activedRoute?.params;
  }

  get breadcrumb(): string {
    return (this.activedRoute?.snapshot.data?.['breadcrumb']) as string;
  }

  get path(): any {
    return this.router.parseUrl(this.router.url).toString()
      .replace('/', '')
      .replaceAll('/', ' / ');
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.getActivedRoute();
  }

  ngOnInit(): void { }

  getActivedRoute(): void {
    this.router.events.forEach(e => {
      if (e instanceof NavigationEnd) {
        this.activedRoute = this.route.root?.firstChild;
      }
    });
  }
}
