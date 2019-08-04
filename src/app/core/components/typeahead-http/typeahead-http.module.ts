import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeaheadHttp } from './typeahead-http.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [CommonModule, NgbTypeaheadModule],
  declarations: [TypeaheadHttp],
  exports: [TypeaheadHttp],
  bootstrap: [TypeaheadHttp]
})
export class TypeaheadHttpModule {}