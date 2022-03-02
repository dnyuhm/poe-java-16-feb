import { Component, Input, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  public states: string[];
  @Input() public init!: Order;

  constructor() {
    this.states = Object.values(StateOrder);
  }

  ngOnInit(): void {}
}
