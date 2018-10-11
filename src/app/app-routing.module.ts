import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'app',
          component: LayoutComponent,
          children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            {
              path: 'home',
              loadChildren: './home/home.module#HomeModule'
            },
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
            // otherwise redirect to home
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
