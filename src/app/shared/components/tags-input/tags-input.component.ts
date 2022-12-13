import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as Tagify from '@yaireo/tagify';

@Component({
  selector: 'ws-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss']
})
export class TagsInputComponent implements AfterViewInit {

  @ViewChild('tagsInput') element?: ElementRef;
  @Input() label?: string;
  @Input() value?: any[];

  constructor() { }

  ngAfterViewInit(): void {
    if (this.element) {
      new Tagify(this.element.nativeElement);
    }
  }
}
