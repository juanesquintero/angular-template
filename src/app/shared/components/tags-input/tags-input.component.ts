import { Component, ElementRef, Input, ViewChild, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as Tagify from '@yaireo/tagify';

@Component({
  selector: 'ws-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagsInputComponent),
      multi: true
    }
  ]
})
export class TagsInputComponent implements ControlValueAccessor, OnChanges {

  @ViewChild('tagsInput') element!: ElementRef;
  @Input() label!: string;
  @Input() options?: any[];
  @Input() selectedOptions?: any[];

  @Input() form!: FormGroup;
  @Input() control!: string;

  isDisabled: boolean = false;
  onChange = (_: any) => { };
  onTouch = () => { };

  private input: any;

  set value(tags: any[]) {
    if (tags !== undefined && this.value !== tags) {
      this.form.controls[this.control].setValue(tags);
      this.onChange(tags)
      this.onTouch();
    }
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['options']?.firstChange) {
      this.tagifyInput();
    }
  }

  tagifyInput(): void {
    if (!this.input) {
      this.input = new Tagify(this.element.nativeElement, {
        whitelist: this.options || [],
        autoComplete: { enabled: true }
      });
      this.input.addTags(this.selectedOptions || []);
    }
  }

  writeValue(value: any[]): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
