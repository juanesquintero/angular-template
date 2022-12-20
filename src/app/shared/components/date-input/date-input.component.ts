import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ws-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {
  @Input() value!: Date;
  @Output() valueChange = new EventEmitter<Date>();

  constructor() { }

  ngOnInit(): void {}

  revalue(event: any) {
    this.value = event.target?.value;
    this.valueChange.emit(this.value);
  }
}
