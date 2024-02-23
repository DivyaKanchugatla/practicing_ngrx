import { createReducer, on } from '@ngrx/store';
import { addData,setData } from './input.action';
import { AppState } from './input.state';

const storedData = JSON.parse(localStorage.getItem('data') || '[]') || [];

export const initialState: AppState = {
  data: storedData,
};


export const appReducer = createReducer(
  initialState,
  on(addData, (state, { fullname, email, password }) => {
    const updatedData = {
      ...state,
      data: [...state.data, { fullname, email, password }]
    };
    localStorage.setItem("data", JSON.stringify(updatedData.data));
    return { ...state, data: updatedData.data };
  }),
  on(setData, (state, { data }) => {
    return { ...state, data: data };
  }),
);
