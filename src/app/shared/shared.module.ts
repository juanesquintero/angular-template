import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { TagsInputComponent } from './components/tags-input/tags-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { DateHihglightDirective } from './directives/date-hihglight/date-hihglight.directive';
import { IfAuthenticatedDirective } from './directives/if-authenticated/if-authenticated.directive';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FilterByPipe } from './pipes/filter-by/filter-by.pipe';
import { TranslateAppModule } from '@src/config/translate.config';
import { TranslateStore } from '@ngx-translate/core';


@NgModule({
  declarations: [
    TagsInputComponent,
    DateInputComponent,
    DurationInputComponent,
    InputErrorComponent,
    DateHihglightDirective,
    IfAuthenticatedDirective,
    DurationPipe,
    OrderByPipe,
    FilterByPipe,
  ],
  exports: [
    TagsInputComponent,
    DateInputComponent,
    DurationInputComponent,
    InputErrorComponent,
    DateHihglightDirective,
    IfAuthenticatedDirective,
    DurationPipe,
    OrderByPipe,
    FilterByPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateAppModule
  ],
  providers: [TranslateStore],
})
export class SharedModule { }
