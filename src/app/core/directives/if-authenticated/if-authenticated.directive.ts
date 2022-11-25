import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';

@Directive({
  selector: '[wsIsAuthenticated]'
})
export class IfAuthenticatedDirective implements OnInit {
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

  private toggleView(status: boolean): void {
    this.viewContainer.clear();
    if (status) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
