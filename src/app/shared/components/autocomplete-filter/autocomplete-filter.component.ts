import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'autocomplete-filter',
  templateUrl: 'autocomplete-filter.component.html',
  styleUrls: ['autocomplete-filter.component.scss']
})


export class AutocompleteFilterComponent implements OnInit {

  @Input()
  acFilterValues: string[];
  @Output()
  resetEvent = new EventEmitter<any>();

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(startWith(''),
        map(value => {
          return this.filterList(value);
        }));
  }

  ngOnInit() {
      this.options = this.acFilterValues;
  }

  //
  private resetPictures(value) {
    if (value) {
      this.resetEvent.next(value);
    }
  }

  private filterList(value: string): string[] {
   // console.log('_filter ', value, ' this.options ', this.options);
    this.resetPictures(value);
    return this.options
      .filter(option => option.includes(value));
  }
}


