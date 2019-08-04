import { NgModule } from '@angular/core';

import { TypeaheadHttpModule } from '../components/typeahead-http/typeahead-http.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    TypeaheadHttpModule,
  ],
  providers: [],
  declarations: [],
  exports: [
    TypeaheadHttpModule,
  ]
})
export class NgBootstrapModule { }