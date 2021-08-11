import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], sortingProp: any): any {
    return value.sort((a, b) => {
      return a[sortingProp].localeCompare(b[sortingProp]);
    });
  }

}
