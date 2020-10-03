import { element } from 'protractor';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'block-designer-order',
    templateUrl: './designer-order.component.html',
    styleUrls: ['./designer-order.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignerOrderComponent implements OnInit {

    elements = [
        {
            caption: 'Предложим новый дизайн вашей мебели',
            image: '../../../../../assets/images/circular-block/icon12.png',
            imageConfig: {},
        },
        {
            caption: 'Произведем замеры и точный расчёт',
            image: '../../../../../assets/images/circular-block/icon5.png',
            imageConfig: {},
        },
        {
            caption: 'Согласуем сроки и этапы работ',
            image: '../../../../../assets/images/circular-block/icon2.png',
            imageConfig: {},
        },
        {
            caption: 'Сделаем приятный подарок по итогу ремонта мебели',
            image: '../../../../../assets/images/circular-block/icon11.png',
            imageConfig: {
                left: '-25px'
            },
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
