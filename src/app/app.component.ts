import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public title!: string;
  private obs$: Observable<any>;
  private subj$: Subject<any>;
  private behave$: BehaviorSubject<any>;
  private sub: Subscription;

  constructor() {
    this.obs$ = new Observable<any>((listX) => {
      listX.next(Math.random());
    });
    this.subj$ = new Subject<any>();
    this.behave$ = new BehaviorSubject<any>('toto');
    this.sub = this.behave$.subscribe((data) => console.log(data));

    // this.obs$.subscribe((data) => console.log(data));
    // this.obs$.subscribe((data) => console.log(data));
    // this.subj$.subscribe((data) => console.log(data));
    // this.subj$.next('toto');
    // this.subj$.next('toto2');
    // this.subj$.subscribe((data) => console.log(data));
    // this.subj$.next(Math.random());
    // this.behave$.next('toto2');
    // this.behave$.next(Math.random());
    // this.behave$.subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
