// display.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/input.state';
import { getData } from 'src/store/input.selector';
import { setData } from 'src/store/input.action';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  data$ = this.store.select(getData);
  displayData:any[]=[]

  constructor(private store: Store<AppState>, private dataService: DataService) { }

  ngOnInit() {
    this.store.dispatch(setData({ data: JSON.parse(localStorage.getItem('data') || '[]') }));
    this.data$.subscribe((data)=>{
      this.displayData = data.data
      console.log("data",this.displayData)
    });
  }
}
