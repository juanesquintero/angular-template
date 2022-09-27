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
    return (this.isNew || this.isEdit) && this.admin;
  }

  get admin(): boolean {
    // TODO: ngrx for user/session info
    return true;
  }

  get isNew(): boolean {
    return this.options.mode === 'new';
  }

  get isEdit(): boolean {
    return this.options.mode === 'edit';
  }

  constructor(
    public dialogRef: MatDialogRef<CourseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IModalData,
  ) {
    this.options = data.options
  }

  ngOnInit(): void {
    const course = this.isNew ? {} as ICourseDTO : this.data.course;
    this.initForm(course as ICourseDTO);
  }

  initControl(value: any): FormControl {
    return new FormControl({
      value: value,
      disabled: !this.editable
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
