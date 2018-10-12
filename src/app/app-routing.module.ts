import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivateChild } from '@angular/router';
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
              loadChildren: './family/family.module#FamilyModule',
              canActivate: [AuthGuard]
            },
            {
              path: 'resume',
              loadChildren: './resume/resume.module#ResumeModule',
              canActivate: [AuthGuard]
            },
            {
              path: 'games',
              loadChildren: './games/games.module#GamesModule',
              canActivate: [AuthGuard]
            },
            {
              path: 'wheelspin',
              loadChildren: './wheel-spin/wheel-spin.module#WheelspinModule',
              canActivate: [AuthGuard]
            },
            {
              path: 'inspector',
              loadChildren: './inspector/inspector.module#InspectorModule',
              canActivate: [AuthGuard]
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
