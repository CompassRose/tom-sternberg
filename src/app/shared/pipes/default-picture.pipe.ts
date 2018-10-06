import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultPicture'
})
export class DefaultPicturePipe implements PipeTransform {
  transform(value: string, fallback: string): string {
    console.log('fallback ', fallback);
    const PICTURE_PATH = '../assets/img/pictureCollection/';
    if (value === '_tn.jpg' || value === '.jpg') {
      value = PICTURE_PATH + fallback;
    }
    return value;
  }
}
