import { NgModule } from '@angular/core';

import { MediaCardMediaComponent, MediaCardComponent, MediaCardFooterComponent, MediaCardHeaderComponent } from './modal-card.component';

@NgModule({
  imports: [MediaCardMediaComponent, MediaCardComponent, MediaCardFooterComponent, MediaCardHeaderComponent],
  declarations: [MediaCardMediaComponent, MediaCardComponent, MediaCardFooterComponent, MediaCardHeaderComponent],
  exports: [MediaCardMediaComponent, MediaCardComponent, MediaCardFooterComponent, MediaCardHeaderComponent]
})
export class MediaCardModule {}
