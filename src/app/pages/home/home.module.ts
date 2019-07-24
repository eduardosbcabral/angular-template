import { NgModule } from "@angular/core";

import { HomeRoutingModule } from './home-routing.module';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  imports: [HomeRoutingModule],
  declarations: [HelloComponent]
})
export class HomeModule {}