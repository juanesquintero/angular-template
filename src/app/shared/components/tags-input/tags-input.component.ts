import {  Component, ElementRef, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import * as Tagify from '@yaireo/tagify';

@Component({
  selector: 'ws-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss']
})
export class TagsInputComponent implements OnChanges {

  @ViewChild('tagsInput') element!: ElementRef;
  @Input() label!: string;
  @Input() options?: any[];
  @Input() selectedOptions?: any[];

  private control: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['options']?.firstChange) {
      this.tagifyInput();
    }
  }

  tagifyInput(): void {
    if (!this.control) {
      this.control = new Tagify(this.element.nativeElement, {
        whitelist: this.options || [],
        autoComplete: { enabled: true }
      });
      this.control.addTags(this.selectedOptions || []);
    }
    console.log(this.control, this.selectedOptions, this.options);
  }
}
