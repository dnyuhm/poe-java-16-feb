import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  public id: number;
  public order$: Observable<Order>;

  constructor(
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = Number(activatedRoute.snapshot.params['id']);
    this.order$ = this.ordersService.getItemById(this.id);
  }

  ngOnInit(): void {}

  public action(item: Order) {
    this.ordersService
      .update(item)
      .subscribe(() => this.router.navigate(['orders']));
  }
}
