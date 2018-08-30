import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FamilyComponent } from './family.component';
import { PicturesComponent } from './pictures/pictures.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'family-routes',
                component: FamilyComponent,
                children: [
                    { path: 'pictures', component: PicturesComponent },
                    { path: 'familyTree', component: FamilyTreeComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class FamilyRoutingModule {}
