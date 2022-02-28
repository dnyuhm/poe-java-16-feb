import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title: string;
  public collection$: Observable<Order[]>;
  public states: string[];
  public headers: string[];

  constructor(private ordersService: OrdersService) {
    this.title = 'list orders';
    this.collection$ = this.ordersService.collection$;
    this.states = Object.values(StateOrder);
    this.headers = [
      'Type',
      'Client',
      'Nb jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];

    // console.log(this.states);
  }

  ngOnInit(): void {}

  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.ordersService.changeState(item, state).subscribe((data) => item = data);
    }


  // Nous n'allons pas utiliser cette méthode dans le html car elle est appelée bien plus que necessaire
  // dans notre tableau , c'est une mauvaise pratique !
  // public total(val: number, coef: number, tva?: number): number {
  //   console.log('total called');
  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }
}
