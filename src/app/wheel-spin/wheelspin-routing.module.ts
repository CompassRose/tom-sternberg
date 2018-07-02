import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WheelTableComponent } from './wheel-table/wheel-table.component';
import { WheelSpinnerComponent } from './wheel-spinner/wheel-spinner.component';

const routes: Routes = [
  {
    path: '',
    component: WheelTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WheelSpinRoutingModule { }
