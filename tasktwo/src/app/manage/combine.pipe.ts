import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'combine'
})
export class CombinePipe implements PipeTransform {
  transform(value: string, lname: string): string {
    return value.concat(lname);
  }
}
