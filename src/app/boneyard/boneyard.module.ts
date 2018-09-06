import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BoneyardRoutingModule } from './boneyard-routing.module';
import { BoneyardComponent } from './boneyard.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        BoneyardRoutingModule,
        HttpClientModule,
        DragAndDropModule.forRoot()
    ],
    declarations: [BoneyardComponent]
})
export class BoneyardModule {}
