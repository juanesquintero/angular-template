import { Component, Input, forwardRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LocaleService } from '@core/services/locale/locale.service';
@Component({
  selector: 'ws-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ]
})
export class DateInputComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() form!: FormGroup;
  @Input() control!: string;

  isDisabled: boolean = false;
  onChange = (_: any) => { };
  onTouch = () => { };

  get value(): Date | string {
    return this.form.get(this.control)?.value;
  }

  set value(date: Date | string) {
    if (date !== undefined && this.value !== date) {
      this.form.controls[this.control].setValue(date);
      this.onChange(date)
      this.onTouch();
    }
  }

  constructor(public locale: LocaleService) { }

  writeValue(value: string): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
