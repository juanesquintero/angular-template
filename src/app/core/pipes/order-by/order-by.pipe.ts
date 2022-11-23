import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash-es';
@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<T>(items: T[], ...args: unknown[]): T[] {
    return orderBy<T>(items, args as any) as T[];
  }

}
