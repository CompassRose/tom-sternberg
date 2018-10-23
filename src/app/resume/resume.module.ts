import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, SharedModule, ResumeRoutingModule, TranslateModule, MDBBootstrapModule.forRoot()],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [TranslateModule],
  declarations: [ResumeComponent, CarouselComponent]
})
export class ResumeModule {}
