import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

import { PagesRoutingModule } from './pages-routing.module';
import { UiModule } from '../ui/ui.module';


@NgModule({
  imports: [
    PagesRoutingModule,
    UiModule
  ],
  declarations: [
    PagesComponent
  ],
  exports: [
    PagesRoutingModule
  ]
})
export class PagesModule {}