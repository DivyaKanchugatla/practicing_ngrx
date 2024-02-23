import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { setData } from './input.action';
import { DataService } from 'src/components/data.service';

@Injectable()
export class AppEffects {
  setData$ = createEffect(
    () => this.actions$.pipe(
      ofType(setData),
      tap(action => this.dataService.setData(action.data))
    ),
    { dispatch: false }
  );
  constructor(private actions$: Actions, private dataService: DataService) {}
}
