import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrilldownComponent } from './drilldown/drilldown.component';
import { InspectorMainComponent } from './inspector-main/inspector-main.component';
import { DetailsComponent } from './details/details.component';

// const routes: Routes = [
//   {
//     path: 'inspect',
//     component: InspectorMainComponent,
//     children: [
//       { path: 'drilldown', component: DrilldownComponent },
//       { path: 'details', component: DetailsComponent },
//       {path: '', redirectTo: 'choose', pathMatch: 'prefix'},
//       { path: '**', redirectTo: 'drilldown', pathMatch: 'prefix' }
//     ]
//   }
// ];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'inspect',
        component: InspectorMainComponent,
        children: [
          {path: 'drilldown', component: DrilldownComponent},
          {path: 'details', component: DetailsComponent}
        ]
      }
    ]),
  ],
 // imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectorRoutingModule { }
