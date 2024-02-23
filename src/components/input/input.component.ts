import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addData } from 'src/store/input.action';
import { DataService } from '../data.service';
import { getData } from 'src/store/input.selector';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  fullname = '';
  email = '';
  password = '';

  constructor(private store: Store, private dataService: DataService) { }

  add() {
    this.store.dispatch(addData({ fullname: this.fullname, email: this.email, password: this.password }));
    this.fullname = '';
    this.email = '';
    this.password = '';
  }

}
