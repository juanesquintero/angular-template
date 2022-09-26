import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IModalOptions } from '../../shared/models';
import { ICourseDTO } from '../../shared/models/courses.model';

type IModalData =  { course?: ICourseDTO, options: IModalOptions };

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public options: IModalOptions;

  get editable(): boolean {
    return this.options.editMode || this.options.newMode;
  }


  constructor(
    public dialogRef: MatDialogRef<CourseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IModalData,
  ) {
    this.options = data.options;
  }

  ngOnInit(): void {
    const course = this.options.newMode ? {} as ICourseDTO : this.data.course;
    this.initForm(course as ICourseDTO);
  }

  initControl(value: any): FormControl {
    return new FormControl({
      value: value,
      disabled: !this.options.editMode
    },
      Validators.required
    );
  }

  initForm(courseData: ICourseDTO): void {
    this.form = new FormGroup({
      title: this.initControl(courseData.title),
      price: this.initControl(courseData.price),
      hours: this.initControl(courseData.hours),
      description: this.initControl(courseData.description),
    })
  }

}
