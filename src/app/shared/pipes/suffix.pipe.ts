import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'suffix'
})
export class SuffixPipe implements PipeTransform {
  /*
   Склонение по числу
   :param value: число
   :param args: массив значений для выбора
   :return: элемент массива

   value |  /pipe_name/   : 'отзыв' :  'отзыва' :  'отзывов'
   */
  transform(value: number | string, ...args: string[]): string {

    if (typeof value === 'string') {
      try {
        value = parseInt(value)
      } catch (e) {

      }
    }

    if (typeof value === 'number') {
      let n = value % 100.00
      let n1 = n % 10

      if (10.00 < n && n < 20.00) {
        return value + args[2]
      }
      if (1.00 < n1 && n1 < 5.00) {
        return value + args[1]
      }
      if (n1 === 1.00) {
        return value + args[0]
      }
      return value + args[2]
    }
    return value + ''
  }

}
