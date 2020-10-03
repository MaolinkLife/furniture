import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'block-hauling-furniture',
    templateUrl: './hauling-furniture-block.component.html',
    styleUrls: ['./hauling-furniture-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HaulingFurnitureBlockComponent implements OnInit {

    elements = [
        {
            caption: 'Позвонить нам или оставить заявку на нашем сайте',
            image: '../../../../../assets/images/circular-block/icon1.png',
            numberConfig: {},
            imageConfig: {},
        },
        {
            caption: 'Согласовать дату и время выезда к вам мастера для произведения замера, расчёта стоимости',
            image: '../../../../../assets/images/circular-block/icon3.png',
            numberConfig: {},
            imageConfig: {
                left: '10px',
                height: '168px',
            },
        },
        {
            caption: 'Выбрать материал и цвет из привезенных мастером образцов и каталогов',
            image: '../../../../../assets/images/circular-block/icon10.png',
            numberConfig: {},
            imageConfig: {
                left: '-40px',
                top: '-60px',
                height: '168px',
            },
        },
        {
            caption: 'Заключить договор и в течении 2-3 дней начнется работа над вашем заказом',
            image: '../../../../../assets/images/circular-block/icon6.png',
            numberConfig: {},
            imageConfig: {
                height: '168px'
            },
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
