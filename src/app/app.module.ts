import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { LayoutModule } from './layout/layout.module';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';

@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [
    // Base
    HttpClientModule,
    LayoutModule,
    BrowserModule,
    // Application
    AppRoutingModule,

    // Third Party
    DragAndDropModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],

  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    HttpClientModule,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
