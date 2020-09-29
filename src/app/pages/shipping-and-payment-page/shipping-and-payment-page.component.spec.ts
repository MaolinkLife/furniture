import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingAndPaymentPageComponent } from './shipping-and-payment-page.component';

describe('ShippingAndPaymentPageComponent', () => {
  let component: ShippingAndPaymentPageComponent;
  let fixture: ComponentFixture<ShippingAndPaymentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingAndPaymentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingAndPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
