import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { LayoutModule } from './layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/picture.reducer';
import { ReadComponent } from './read/read.component';

@NgModule({
    declarations: [AppComponent, ReadComponent],
    imports: [
        // Base
        HttpClientModule,
        LayoutModule,
        BrowserModule,
        StoreModule.forRoot({
            picture: reducer
        }),

        // Application
        AppRoutingModule,

        // Third Party
        DragAndDropModule.forRoot(),
        MDBBootstrapModule.forRoot()
    ],

    schemas: [NO_ERRORS_SCHEMA],
    providers: [HttpClientModule, HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule {}
