import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { HelloComponent } from './hello/hello.component';

const routes: Routes = [{
  path: '',
  component: HelloComponent,
  children: []
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}