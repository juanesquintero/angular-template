import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { TagsInputComponent } from './components/tags-input/tags-input.component';
import { CoreModule } from '@core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputErrorComponent } from './components/input-error/input-error.component';


@NgModule({
  declarations: [
    TagsInputComponent,
    DateInputComponent,
    DurationInputComponent,
    InputErrorComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TagsInputComponent,
    DateInputComponent,
    DurationInputComponent,
    InputErrorComponent,
  ]
})
export class SharedModule { }
