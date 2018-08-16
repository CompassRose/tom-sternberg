import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DrilldownComponent } from './drilldown/drilldown.component';
import { InspectorRoutingModule } from './inspector-routing.module';
import { InspectorMainComponent } from './inspector-main/inspector-main.component';
import { BarChartComponent } from './drilldown/stacked-bar/stacked-bar.component';
import { PieChartComponent } from './drilldown/pie/pie.component';
import { LineChartComponent } from './drilldown/stacked-line/stacked-line.component';
import { SingleComboComponent } from './drilldown/single-combo/single-combo.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        SharedModule,
        InspectorRoutingModule,
        MDBBootstrapModule.forRoot(),
    ],
    declarations: [
        InspectorMainComponent,
        DrilldownComponent,
        BarChartComponent,
        PieChartComponent,
        LineChartComponent,
        SingleComboComponent,
        DetailsComponent,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class InspectorModule {}
