import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { TagsInputComponent } from './components/tags-input/tags-input.component';
import { CoreModule } from '@core/core.module';


@NgModule({
  declarations: [
    TagsInputComponent,
    DateInputComponent,
    DurationInputComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [
    TagsInputComponent,
    DateInputComponent,
    DurationInputComponent,
  ]
})
export class SharedModule { }
