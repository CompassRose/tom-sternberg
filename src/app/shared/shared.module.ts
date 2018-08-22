import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { PlaceSuffixPipe } from './pipes/place-suffix.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { DatetimePickerComponent } from './components/datetime-picker/datetime-picker.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent } from './components/ngb-modal/ngb-modal.component';
import { NgbdVideoModalComponent } from './components/ngb-video-modal/ngb-video-modal.component';
import { NgbdTabsComponent } from './ngbd-tabs/ngbd-tabs.component';
import { CustomTooltipComponent } from './components/custom-tooltip/custom-tooltip.component';
import { DefaultPicturePipe } from './pipes/default-picture.pipe';

@NgModule({
    imports: [CommonModule, FormsModule, NgbModule, MDBBootstrapModule.forRoot()],
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [
        DatetimePickerComponent,
        NgbdModalComponent,
        NgbdVideoModalComponent,
        CustomTooltipComponent,
        NgbdTabsComponent,
        // pipes
        PlaceSuffixPipe,
        DefaultPicturePipe,
        SafePipe,
    ],
    exports: [
        DatetimePickerComponent,
        NgbdModalComponent,
        NgbdTabsComponent,
        CustomTooltipComponent,
        DefaultPicturePipe,
        SafePipe,
    ],
    entryComponents: [
        NgbdModalComponent,
        NgbdTabsComponent,
        CustomTooltipComponent,
        NgbdVideoModalComponent,
    ],
})
export class SharedModule {}
