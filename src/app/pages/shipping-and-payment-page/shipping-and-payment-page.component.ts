import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shipping-and-payment-page',
  templateUrl: './shipping-and-payment-page.component.html',
  styleUrls: ['./shipping-and-payment-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShippingAndPaymentPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
