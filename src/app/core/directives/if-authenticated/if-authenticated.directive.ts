import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';

@Directive({
  selector: '[wsIsAuthenticated]'
})
export class IfAuthenticatedDirective implements OnInit {
  @Input('wsIsAuthenticated') authenticatedRequired?: boolean | '' = true;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) { };

  public ngOnInit(): void {
    this.authService.isAuthenticated.subscribe((status: boolean) => {
      this.toggleView(status);
    })
  }

  private showView(): void {
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
  private toggleView(status: boolean): void {
    this.viewContainer.clear();
    if(this.authenticatedRequired) {
      if (status) {
        this.showView();
      }
    } else {
      if (!status) {
        this.showView();
      }
    }
  }
}
