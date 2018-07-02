import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WheelSpinRoutingModule } from './wheelspin-routing.module';
import { WheelSpinnerComponent } from './wheel-spinner/wheel-spinner.component';
import { SharedModule} from '../shared/shared.module';
import { WheelTableComponent } from './wheel-table/wheel-table.component';
import { DragAndDropModule } from 'angular-draggable-droppable';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WheelSpinRoutingModule,
    DragAndDropModule.forRoot()
  ],
  declarations: [ WheelSpinnerComponent, WheelTableComponent ]
})
export class WheelspinModule { }
