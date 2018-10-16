import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from './family.component';
import { PicturesComponent } from './pictures/pictures.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';
import { ParentTreeComponent } from './parent-tree/parent-tree.component';
import { DtreeComponent } from './dtree/dtree.component';
import { WorldmapLocatorComponent } from './worldmap-locator/worldmap-locator.component';

@NgModule({
  imports: [CommonModule, SharedModule, FamilyRoutingModule],
  declarations: [FamilyComponent, PicturesComponent, FamilyTreeComponent, ParentTreeComponent, DtreeComponent, WorldmapLocatorComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FamilyModule {}
