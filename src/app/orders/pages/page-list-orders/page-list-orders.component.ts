import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title: string;
  public headers: string[];
  public collection$: Observable<Order[]>;

  constructor(private ordersService: OrdersService) {
    this.title = 'list orders';
    this.headers = [
      'typePresta',
      'client',
      'tjmHt',
      'nbJours',
      'TOTALHT',
      'TOTALTTC',
      'state',
    ];

    this.collection$ = this.ordersService.collection$;
  }

  ngOnInit(): void {}

  // Nous n'allons pas utiliser cette méthode dans le html car elle est appelée bien plus que necessaire
  // dans notre tableau , c'est une mauvaise pratique !
  // public total(val: number, coef: number, tva?: number): number {
  //   console.log('total called');
  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }
}
