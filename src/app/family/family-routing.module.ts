import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FamilyComponent } from './family.component';
import { PicturesComponent } from './pictures/pictures.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';
import { ParentTreeComponent } from './parent-tree/parent-tree.component';
import { DtreeComponent } from './dtree/dtree.component';
import { WorldmapLocatorComponent } from './worldmap-locator/worldmap-locator.component';
import { GeoLeafletMapComponent } from './geo-leaflet-world-map/geo-leaflet-world-map.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'family-routes',
        component: FamilyComponent,
        children: [
          { path: 'pictures', component: PicturesComponent },
          { path: 'familyTree', component: FamilyTreeComponent },
          { path: 'parentTree', component: ParentTreeComponent },
          { path: 'dTree', component: DtreeComponent },
          { path: 'Leaflet', component: GeoLeafletMapComponent },
          { path: 'worldmap-locator', component: WorldmapLocatorComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class FamilyRoutingModule {}
