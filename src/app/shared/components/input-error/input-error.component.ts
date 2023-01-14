import { AbstractControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ws-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss']
})
export class InputErrorComponent implements OnInit {
  @Input() errors!: { [key: string]: string };
  @Input() control!: AbstractControl | null;

  constructor() { }

  ngOnInit(): void {}
}
