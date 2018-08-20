import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrilldownComponent } from './drilldown/drilldown.component';
import { InspectorMainComponent } from './inspector-main/inspector-main.component';
import { DetailsComponent } from './details/details.component';
import { LinkedUSMapComponent } from './linked-us-map/linked-us-map.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'inspect',
                component: InspectorMainComponent,
                children: [
                    { path: 'drilldown', component: DrilldownComponent },
                    { path: 'details', component: DetailsComponent },
                    { path: 'map', component: LinkedUSMapComponent },
                ],
            },
        ]),
    ],
    // imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InspectorRoutingModule {}
