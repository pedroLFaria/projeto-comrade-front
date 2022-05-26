import { NgModule, Optional, SkipSelf } from '@angular/core';
import {
  DxSelectBoxModule,
  DxRangeSliderModule,
  DxButtonModule,
  DxListModule,
} from 'devextreme-angular';
import { MatchRoutingModule } from './match.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { MatchComponent } from './match.component';

@NgModule({
  imports: [
    MatchRoutingModule,
    DxSelectBoxModule,
    DxRangeSliderModule,
    DxButtonModule,
    DxListModule,
  ],
  exports: [],
  declarations: [MatchComponent],
  providers: [],
})
export class MatchModule {
  constructor(@Optional() @SkipSelf() parentModule: MatchModule) {
    throwIfAlreadyLoaded(parentModule, 'MatchModule');
  }
}
