import { ACTIONS_LABEL } from './../../shared/constants';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IModalMode, IModalOptions } from '../../shared/models';
import { ICourseDTO } from '../../shared/models/courses.model';

type IModalData = { course?: ICourseDTO, mode: IModalMode };

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent implements OnInit {
  public form: FormGroup = new FormGroup({});

  get editable(): boolean {
    return this.isNew || this.isEdit;
  }

  get isAdmin(): boolean {
    // TODO: ngrx for user/session info
    return true;
  }

  get isNew(): boolean {
    return this.data.mode === 'new' && this.isAdmin;
  }

  get isEdit(): boolean {
    return this.data.mode === 'edit' && this.isAdmin;
  }

  get isDetail(): boolean {
    return this.data.mode === 'detail';
  }

  get action(): string {
    return ACTIONS_LABEL[this.data.mode];
  }

  constructor(
    public dialogRef: MatDialogRef<CourseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IModalData,
  ) { }

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

  onSubmit(): void {
    if (!this.isDetail) {
      this.dialogRef.close({
        action: this.action,
        course: this.data.course
      });
    }
  }
}
