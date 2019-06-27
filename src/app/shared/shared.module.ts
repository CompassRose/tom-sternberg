import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { PlaceSuffixPipe } from './pipes/place-suffix.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { DatetimePickerComponent } from './components/datetime-picker/datetime-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent } from './components/ngb-modal/ngb-modal.component';
import { NgbdVideoModalComponent } from './components/ngb-video-modal/ngb-video-modal.component';
import { NgbdTranscludeModalComponent } from './components/ngb-transclude-modal/ngb-transclude-modal.component';
import { CustomTooltipComponent } from './components/custom-tooltip/custom-tooltip.component';
import { DefaultPicturePipe } from './pipes/default-picture.pipe';
import { FilterPipe } from './pipes/filter-pipe';
import { NgbdPictureModalComponent } from './components/ngb-picture-modal/ngb-picture-modal.component';
import { SharedTabComponent } from './components/shared-tab/shared-tab.component';
import { DemoMaterialModule } from '../material-module';
import { GridListDynamicComponent } from './components/grid-list-dynamic/grid-list-dynamic.component';
import { AutocompleteFilterComponent } from './components/autocomplete-filter/autocomplete-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoMaterialModule,
    NgbModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    DatetimePickerComponent,
    NgbdModalComponent,
    NgbdVideoModalComponent,
    NgbdTranscludeModalComponent,
    NgbdPictureModalComponent,
    CustomTooltipComponent,
    SharedTabComponent,
    GridListDynamicComponent,
    AutocompleteFilterComponent,
    // pipes
    PlaceSuffixPipe,
    DefaultPicturePipe,
    SafePipe,
    FilterPipe
  ],
  exports: [
    DatetimePickerComponent,
    SharedTabComponent,
    CustomTooltipComponent,
    DefaultPicturePipe,
    SafePipe,
    FilterPipe,
    FormsModule,
    GridListDynamicComponent,
    AutocompleteFilterComponent,
    ReactiveFormsModule
  ],
  entryComponents: [
    NgbdModalComponent,
    CustomTooltipComponent,
    NgbdVideoModalComponent,
    NgbdTranscludeModalComponent,
    NgbdPictureModalComponent,
    SharedTabComponent,
    GridListDynamicComponent,
    AutocompleteFilterComponent
  ]
})
export class SharedModule {
}
