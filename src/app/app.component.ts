import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title!: string;
  private obs$: Observable<any>;
  private subj$: Subject<any>;
  private behave$: BehaviorSubject<any>;

  constructor() {
    this.obs$ = new Observable<any>((listX) => {
      listX.next(Math.random());
    });
    this.subj$ = new Subject<any>();
    this.behave$ = new BehaviorSubject<any>('toto');

    // this.obs$.subscribe((data) => console.log(data));
    // this.obs$.subscribe((data) => console.log(data));
    // this.subj$.subscribe((data) => console.log(data));
    // this.subj$.next('toto');
    // this.subj$.next('toto2');
    // this.subj$.subscribe((data) => console.log(data));
    // this.subj$.next(Math.random());
    // this.behave$.next('toto2');
    // this.behave$.subscribe((data) => console.log(data));
    // this.behave$.next(Math.random());
    // this.behave$.subscribe((data) => console.log(data));
  }
}
