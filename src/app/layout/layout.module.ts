import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        MDBBootstrapModule.forRoot()
    ],
    declarations: [
        LayoutComponent,
    ]
})
export class LayoutModule {
}


