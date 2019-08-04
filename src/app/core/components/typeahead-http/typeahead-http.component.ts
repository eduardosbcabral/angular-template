import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap, catchError } from 'rxjs/operators';


@Component({
  selector: 'typeahead-http',
  templateUrl: './typeahead-http.component.html',
  styles: []
})
export class TypeaheadHttp {

  @Input() searchFunction: any;
  @Input() resultFormatter: any;
  @Input() inputFormatter: any; 
  searching = false;
  searchFailed = false;

  search = (text$: Observable<string>) => {
    return text$.pipe(      
        debounceTime(300), 
        distinctUntilChanged(),
        tap(() => this.searching = true),
        // switchMap allows returning an observable rather than maps array
        switchMap((searchText) => this.searchFunction(searchText).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )),
        tap(() => this.searching = false)
    );
  }
}