import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloader implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    // @ts-ignore
    if (route.data?.preload) {
      return fn();
    }

    return of(null);
  }
}
