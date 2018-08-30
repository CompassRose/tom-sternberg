import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from './family.component';
import { PicturesComponent } from './pictures/pictures.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedModule, FamilyRoutingModule],
    declarations: [FamilyComponent, PicturesComponent, FamilyTreeComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class FamilyModule {}
