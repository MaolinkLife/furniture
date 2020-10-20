import { IconsModule } from './../../shared/components/icons/icons.module';
import { MessagersModule } from './../../shared/components/messagers/messagers.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentCompleteComponent } from './payment-complete.component';



@NgModule({
    declarations: [PaymentCompleteComponent],
    imports: [
        CommonModule,
        MessagersModule,
        IconsModule,
    ],
    exports: [
        PaymentCompleteComponent,
    ]
})
export class PaymentCompleteModule { }
