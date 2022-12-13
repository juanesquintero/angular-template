import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ws-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {

  @Input() value?: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
