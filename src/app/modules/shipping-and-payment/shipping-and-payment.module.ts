import { IconsModule } from './../../shared/components/icons/icons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingAndPaymentComponent } from './shipping-and-payment.component';

@NgModule({
    declarations: [
        ShippingAndPaymentComponent,
    ],
    imports: [
        CommonModule,
        IconsModule,
    ], exports: [
        ShippingAndPaymentComponent,
    ]
})
export class ShippingAndPaymentModule { }
