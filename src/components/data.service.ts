import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData(): any[] {
    return JSON.parse(localStorage.getItem('data') || '[]');
  }

  setData(data: any[]): void {
    localStorage.setItem('data', JSON.stringify(data));
  }
}
