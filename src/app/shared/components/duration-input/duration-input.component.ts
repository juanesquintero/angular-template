import { FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, forwardRef, Input } from '@angular/core';

@Component({
  selector: 'ws-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true
    }
  ]
})
export class DurationInputComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() form!: FormGroup;
  @Input() control!: string;

  isDisabled: boolean = false;
  onChange = (_: any) => { };
  onTouch = () => { };

  get value(): number {
    return this.form.get(this.control)?.value;
  }

  set value(duration: number) {
    if (duration !== undefined && this.value !== duration) {
      this.form.controls[this.control].setValue(duration);
      this.onChange(duration)
      this.onTouch();
    }
  }

  constructor() { }


  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
