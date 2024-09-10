import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectCurrentCount,
  selectValuePerCount,
} from '@/app/store/counter/counter.selectors';
import {
  increment,
  decrement,
  reset,
} from '@/app/store/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count$: Observable<number>;
  duplicatedCount$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCurrentCount);
    this.duplicatedCount$ = this.store.select(selectValuePerCount);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
