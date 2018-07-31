import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pictureFilter',
  pure: false
})

export class PictureFilterPipe implements PipeTransform {
  transform(items: any, filters?: any): any[] {

    return items = items.filter(a => {
      // console.log('filter items ', items);
      return filters.length ? filters.indexOf(a.status) !== -1 : items;
    });
  }
}
