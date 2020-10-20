import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-payment-complete',
    templateUrl: './payment-complete.component.html',
    styleUrls: ['./payment-complete.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentCompleteComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
