import { Component, ChangeDetectionStrategy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class LayoutComponent implements OnInit {
    public isExpanded = false;

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.navigate(['app/inspector/inspect/drilldown']);
        // this.router.navigate(['app/resume']);
        //  this.router.navigate(['app/wheelspin']);
        // this.router.navigate(['app/family/family-routes/familyTree']);
        // this.router.navigate(['app/boneyard']);
    }

    menu_OnClick(evt) {
        this.isExpanded = !this.isExpanded;
    }

    logout() {}
}
