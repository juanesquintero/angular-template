import { Pipe, PipeTransform } from '@angular/core';
import { isObject, isString } from 'lodash-es';

type IOperator = '<' | '>' | '!=' | '==' | 'LIKE';
@Pipe({
  name: 'filter'
})
export class FilterPipeBy implements PipeTransform {

  transform<T>(items: T[], operator: IOperator, condition: unknown, field?: string, ): T[] {

    if (operator == 'LIKE' && isString(condition)) {
      return items.filter((item: T) =>  {
        const _item = `${this.getItem(item, field) as string}`;
        return this.match(_item, condition as string);
      }) as T[];
    }

    condition = this.toEvalStr(condition);
    return items.filter((item: T) => {
      let value = this.toEvalStr(this.getItem(item, field));
      return eval(`${value} ` + operator + ' ' + condition);
    }) as T[];

  }

  getItem(item: unknown, field?: string): unknown{
    if(isObject(item) && field) {
      return (item as Record<string, any>)[field];
    }
    return item
  }

  toEvalStr(value: unknown): string{
    if(isString(value) ) return `'${value}'`
    return `${value}`
  }

  match(item: string, condition: string): boolean{
    return item.toLowerCase().trim().includes(condition.toLowerCase().trim());
  }
}
