import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'modal-media-card',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./modal-card.component.scss']
})
export class MediaCardComponent {}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'modal-media-card-footer',
  template: '<ng-content></ng-content>',
  styleUrls: ['./modal-media-card-footer.component.scss']
})
export class MediaCardFooterComponent {}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'modal-media-card-header',
  template: '<ng-content></ng-content>',
  styleUrls: ['./modal-media-card-header.component.scss']
})
export class MediaCardHeaderComponent {}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'modal-media-card',
  template: '<ng-content></ng-content>',
  styleUrls: ['./modal-media-card.component.scss']
})
export class MediaCardMediaComponent {}
