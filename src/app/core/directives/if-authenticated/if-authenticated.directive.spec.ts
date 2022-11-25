import { TemplateRef, ViewContainerRef } from '@angular/core';
import { IfAuthenticatedDirective } from './if-authenticated.directive';
import { AuthService } from 'src/app/core/services/auth/auth.service';

const templateRef: TemplateRef<any> = jasmine.createSpyObj('TemplateRef', {
  foo: 'bar'
});
const viewContainer: ViewContainerRef = jasmine.createSpyObj('ViewContainerRef', {
  clear: jasmine.createSpy()
});
const authService: AuthService = jasmine.createSpyObj('AuthService', {
  isAuthenticated: true
});

describe('IfAuthenticatedDirective', () => {
  it('should create an instance', () => {
    const directive = new IfAuthenticatedDirective(templateRef, viewContainer, authService);
    expect(directive).toBeTruthy();
  });
});
