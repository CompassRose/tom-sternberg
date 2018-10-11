import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../login';
import { RegisterComponent } from '../register';
import { HomeComponent } from '../home';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, SharedModule, MDBBootstrapModule.forRoot()],
  declarations: [LayoutComponent, LoginComponent, RegisterComponent, HomeComponent]
})
export class LayoutModule {}
