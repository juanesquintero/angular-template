import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DurationPipe } from '@src/app/shared/pipes/duration/duration.pipe';

import { DurationInputComponent } from './duration-input.component';

describe('DurationInputComponent', () => {
  let component: DurationInputComponent;
  let fixture: ComponentFixture<DurationInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurationInputComponent, DurationPipe ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
