import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'app',
          component: LayoutComponent,
          children: [
            {
              path: 'boneyard',
              loadChildren: './boneyard/boneyard.module#BoneyardModule'
            },
            {
              path: 'family',
              loadChildren: './family/family.module#FamilyModule'
            },
            {
              path: 'resume',
              loadChildren: './resume/resume.module#ResumeModule'
            },
            {
              path: 'games',
              loadChildren: './games/games.module#GamesModule'
            },
            {
              path: 'wheelspin',
              loadChildren: './wheel-spin/wheel-spin.module#WheelspinModule'
            },
            {
              path: 'inspector',
              loadChildren: './inspector/inspector.module#InspectorModule'
            },
            {
              path: '',
              redirectTo: '',
              pathMatch: 'full'
            }
          ]
        }
      ],
      { useHash: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
