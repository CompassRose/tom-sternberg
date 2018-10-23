import { ChangeDetectionStrategy, Component, OnInit, Input, Output } from '@angular/core';
import { MediaCardModule } from '../shared/components/modal-card/modal-card.module';

@Component({
  selector: 'video-card',
  templateUrl: './video-card.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MediaCardModule]
})
export class VideoCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('VideoCardComponent');
  }
}
