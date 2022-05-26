import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { DxGalleryModule, DxButtonModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [HomeRoutingModule, DxGalleryModule, DxButtonModule, CommonModule],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {
  constructor(@Optional() @SkipSelf() parentModule: HomeModule) {
    throwIfAlreadyLoaded(parentModule, 'HomeModule');
  }
}
