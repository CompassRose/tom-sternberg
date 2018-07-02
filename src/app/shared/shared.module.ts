import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {CommonModule} from '@angular/common';
import {PlaceSuffixPipe} from './pipes/place-suffix.pipe';
import {DatetimePickerComponent} from './components/datetime-picker/datetime-picker.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalComponent} from './components/ngb-modal/ngb-modal.component';
import {NgbdTabsComponent} from './ngbd-tabs/ngbd-tabs.component';
import {CustomTooltipComponent } from './components/custom-tooltip/custom-tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    DatetimePickerComponent,
    NgbdModalComponent,
    CustomTooltipComponent,
    NgbdTabsComponent,
    // pipes
    PlaceSuffixPipe
  ],
  exports: [
    DatetimePickerComponent,
    NgbdModalComponent,
    NgbdTabsComponent,
    CustomTooltipComponent
  ],
  entryComponents: [
    NgbdModalComponent,
    NgbdTabsComponent,
    CustomTooltipComponent
  ],
})
export class SharedModule {
}
