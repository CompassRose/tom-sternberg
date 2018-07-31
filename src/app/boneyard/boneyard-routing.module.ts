import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoneyardComponent } from './boneyard.component';

const routes: Routes = [
  {
    path: '',
    component: BoneyardComponent
  }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoneyardRoutingModule { }
