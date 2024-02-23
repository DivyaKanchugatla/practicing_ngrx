import { createAction, props } from '@ngrx/store';

export const addData = createAction('[Data] Add', props<{ fullname: string, email: string, password: string }>());
export const setData = createAction('[Data] Set', props<{ data: any[] }>());