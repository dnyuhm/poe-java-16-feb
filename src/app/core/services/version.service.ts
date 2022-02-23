import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public version$: BehaviorSubject<number>;

  constructor() {
    this.version$ = new BehaviorSubject<number>(1);
  }

  public incrementVersion(): void {
    this.version$.next(this.version$.value + 1);
  }
}
