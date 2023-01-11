import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ws-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnChanges  {
  @Input() value!: Date | string;
  @Output() valueChange = new EventEmitter<Date>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.value){
      this.value = (this.value as string).split('T')[0]
    }
  }

  revalue(event: any) {
    this.value = event.target?.value;
    this.valueChange.emit(this.value as Date);
  }
}
