import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
