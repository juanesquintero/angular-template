import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() isAdmin!: boolean;
  @Input() openModal!: any;
  @Input() tableColumns!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
