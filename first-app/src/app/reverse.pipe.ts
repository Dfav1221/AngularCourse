import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    let newString = '';
    for (let valueElement of value) {
      newString = valueElement + newString;
    }
    return newString;
  }

}
