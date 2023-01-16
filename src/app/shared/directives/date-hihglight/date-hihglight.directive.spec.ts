import { ElementRef } from '@angular/core';
import { DateHihglightDirective } from './date-hihglight.directive';

let element: jasmine.SpyObj<ElementRef>;
element = jasmine.createSpyObj('ElementRef', {
  nativeElement: { style: { border: null } }
});

describe('DateHihglightDirective', () => {
  let directive: DateHihglightDirective;

  beforeEach(async () => {
    directive = new DateHihglightDirective(element);
  });


  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
