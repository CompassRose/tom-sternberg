import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';


@Injectable()
export class AutoCompleteService {

  public subjectData;

  public picSubjects = new BehaviorSubject<any>(this.subjectData);

  constructor() {

  }

  getSubjectData(newList) {
    this.picSubjects.next(newList);
  }

}
