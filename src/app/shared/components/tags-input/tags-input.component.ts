import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as Tagify from '@yaireo/tagify';

@Component({
  selector: 'ws-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss']
})
export class TagsInputComponent implements AfterViewInit {

  @ViewChild('tagsInput') element?: ElementRef;
  @Input() label!: string;
  @Input() options?: any[];
  @Input() selectedOptions?: any[];

  private control: any;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.element) {
      this.control = new Tagify(
        this.element.nativeElement, {
          whitelist: this.options,
          autoComplete: {
            enabled: true
          }
      });
      this.control.addTags(this.selectedOptions)

    }
  }
}
