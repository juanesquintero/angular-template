import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ws-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {
  @Input() value!: number;
  @Output() valueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  revalue(event: any) {
    this.value = Number(event.target?.value);
    this.valueChange.emit(this.value);
  }
}
