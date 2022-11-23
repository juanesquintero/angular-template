import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'lodash-es';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(minutes: unknown, ...args: unknown[]): string {
    let [hours, remaining] = [0, 0];

    if (!this.invalid(minutes)) {
      hours = Math.trunc(minutes as number/ 60);
      remaining = minutes as number % 60;
    }

    return `${hours} h ${remaining} min`;
  }

  invalid(minutes: unknown): boolean {
    return (!minutes ||  !isNumber(minutes)  || isNaN(minutes) || !isFinite(minutes));
  }
}
