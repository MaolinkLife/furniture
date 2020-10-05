import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shipping-and-payment',
  templateUrl: './shipping-and-payment.component.html',
  styleUrls: ['./shipping-and-payment.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShippingAndPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
