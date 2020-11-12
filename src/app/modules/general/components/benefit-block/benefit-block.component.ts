import {
    Component, OnInit, ChangeDetectionStrategy, Input, QueryList, AfterViewInit, ViewChildren, ElementRef, SimpleChanges, OnChanges
} from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-benefit-block',
    templateUrl: './benefit-block.component.html',
    styleUrls: ['./benefit-block.component.less']
})
export class BenefitBlockComponent implements OnInit, AfterViewInit, OnChanges {


    @Input()
    blockIsVisible: boolean;


    @ViewChildren('circularItem')
    circularItemsTemplate: QueryList<ElementRef<HTMLElement>>;


    circularItems = [
        {
            caption: 'Обращение к нам, звонок либо заявка',
            image: '../../../../../assets/images/circular-block/icon1.png',
            positionStyle: {
                top: '-50px',
                left: '200px',
            },
        },
        {
            caption: 'Согласование условий',
            image: '../../../../../assets/images/circular-block/icon2.png',
            positionStyle: {
                top: '150px',
                left: '125px',
            },
        },
        {
            caption: 'Выезд дизайнера-технолога',
            image: '../../../../../assets/images/circular-block/icon3.png',
            positionStyle: {
                top: '325px',
                left: '170px',
            },
        },
        {
            caption: 'Выбор материала',
            image: '../../../../../assets/images/circular-block/icon4.png',
            positionStyle: {
                top: '430px',
                left: '325px',
            },
            numberPosition: {
                top: '40px',
                right: '-25px',
            },
        },
        {
            caption: 'Финальный расчёт в нескольких вариантах',
            image: '../../../../../assets/images/circular-block/icon5.png',
            positionStyle: {
                top: '485px',
                left: '515px',
            },
            numberPosition: {
                top: '50px',
            },
        },
        {
            caption: 'Заключение договора',
            image: '../../../../../assets/images/circular-block/icon6.png',
            positionStyle: {
                top: '435px',
                left: '755px',
            },
            numberPosition: {
                top: '50px',
            },
        },
        {
            caption: 'Забираем мебель на производство',
            image: '../../../../../assets/images/circular-block/icon7.png',
            positionStyle: {
                top: '300px',
                left: '890px',
            },
            numberPosition: {
                top: '50px',
            },
        },
        {
            caption: 'Осуществляем ремонт в течении 15 дней',
            image: '../../../../../assets/images/circular-block/icon8.png',
            positionStyle: {
                top: '120px',
                left: '935px',
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
                top: '-50px',
                left: '840px',
            },
            numberPosition: {
                top: '40px',
                left: '-45px',
            },
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(): void {
        this.startTimer();
    }

    ngAfterViewInit(): void {
    }

    startTimer(): void {
        const items = this.circularItemsTemplate.toArray();

        const t = timer(0, 150).pipe(take(items.length)).subscribe(i => {
            items[i].nativeElement.style.opacity = '1';
        });
    }

}
