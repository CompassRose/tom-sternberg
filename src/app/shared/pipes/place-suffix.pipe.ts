import { Pipe, PipeTransform } from '@angular/core';
import {NumberUtility} from '../utilities/number-utility';

@Pipe({name: 'placeSuffix'})

export class PlaceSuffixPipe implements PipeTransform {
  transform(value: number): string {
    return NumberUtility.getSuffix(value);
  }
}
