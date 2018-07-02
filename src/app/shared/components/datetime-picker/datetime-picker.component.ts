import { Component, Input, OnChanges } from '@angular/core';
import { NgbDateStruct, NgbTimeStruct, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';
import { NgbDateNativeAdapter } from '../../utilities/NgbDateNativeAdapter';

@Component({
    selector: 'datetime-picker',
    templateUrl: './datetime-picker.component.html',
    styleUrls: ['./datetime-picker.component.scss'],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class DatetimePickerComponent {
    @Input() time: NgbTimeStruct;
    @Input() date: Date;

    showDatetime = false;

    constructor() {}

    getDatetime(): Date {
        this.date.setHours(this.time.hour);
        this.date.setMinutes(this.time.minute);
        return this.date;
    }
}
