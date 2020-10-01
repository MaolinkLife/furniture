import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-benefit-block',
    templateUrl: './benefit-block.component.html',
    styleUrls: ['./benefit-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenefitBlockComponent implements OnInit {


    circularItems = [
        {
            caption: 'Обращение к нам, звонок либо заявка',
            image: '../../../../../assets/images/circular-block/icon1.png',
            positionStyle: {
                top: '0',
                left: '50px',
            },
        },
        {
            caption: 'Согласование условий',
            image: '../../../../../assets/images/circular-block/icon2.png',
            positionStyle: {
                top: '250px',
                left: '-25px',
            },
        },
        {
            caption: 'Выезд дизайнера -технолога',
            image: '../../../../../assets/images/circular-block/icon3.png',
            positionStyle: {
                top: '450px',
                left: '50px',
            },
        },
        {
            caption: 'Выбор материала',
            image: '../../../../../assets/images/circular-block/icon4.png',
            positionStyle: {
                top: '640px',
                left: '150px',
            },
            numberPosition: {
                top: '150px',
                right: '-80px',
            },
        },
        {
            caption: 'Финальный расчёт в нескольких вариантах',
            image: '../../../../../assets/images/circular-block/icon5.png',
            positionStyle: {
                top: '810px',
                left: '550px',
            },
            numberPosition: {
                top: '50px',
            },
        },
        {
            caption: 'Заключение договора',
            image: '../../../../../assets/images/circular-block/icon6.png',
            positionStyle: {
                top: '720px',
                left: '850px',
            },
            numberPosition: {
                top: '50px',
            },
        },
        {
            caption: 'Забираем мебель на производство',
            image: '../../../../../assets/images/circular-block/icon7.png',
            positionStyle: {
                top: '490px',
                left: '1000px',
            },
            numberPosition: {
                top: '50px',
            },
        },
        {
            caption: 'Осуществляем ремонт в течении 15 дней',
            image: '../../../../../assets/images/circular-block/icon8.png',
            positionStyle: {
                top: '250px',
                left: '1050px',
            },
            numberPosition: {
                top: '50px',
                left: '-30px',
            },
        },
        {
            caption: 'Доставка новой мебели',
            image: '../../../../../assets/images/circular-block/icon9.png',
            positionStyle: {
                top: '0px',
                left: '850px',
            },
            numberPosition: {
                top: '30px',
                left: '8px',
            },
        },
    ];

    constructor() { }

    ngOnInit(): void {

    }

}
