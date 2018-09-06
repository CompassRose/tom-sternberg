import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FamilyComponent } from './family.component';
<<<<<<< HEAD

const routes: Routes = [
    {
        path: '',
        component: FamilyComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
=======
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
>>>>>>> develop
})
export class FamilyRoutingModule {}
