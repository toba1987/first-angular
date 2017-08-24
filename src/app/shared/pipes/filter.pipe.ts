import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /*transform(items: any[], field: string, value: string): any {
    console.log(field);
    return items.filter(item => {
      console.log(item[field]);
      return item[field].indexOf(value) !== -1
    });*/
    transform(items: any[], field: string, value: string): any {

          return items.filter(item => {

              return item[field].indexOf(value) !== -1
          });
  }
}
