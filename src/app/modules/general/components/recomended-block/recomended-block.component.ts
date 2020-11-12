import { element } from 'protractor';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';


const CONTENT = [
    {
        main: {
            image: '../../../../../assets/images/reviews/first/IMG_6204.JPG',
        },
        sub: [
            {
                image: '../../../../../assets/images/reviews/first/IMG_6205.JPG',
                style: {
                    'background-image': 'url(../../../../../assets/images/reviews/first/IMG_6205.JPG)',
                    'background-position': 'center',
                    'background-size': 'cover',
                }
            },
            {
                image: '../../../../../assets/images/reviews/first/IMG_6207.JPG',
                style: {
                    'background-image': 'url(../../../../../assets/images/reviews/first/IMG_6207.JPG)',
                    'background-position': 'center',
                    'background-size': 'cover',
                }
            },
            {
                image: '../../../../../assets/images/reviews/first/IMG_6208.JPG',
                style: {
                    'background-image': 'url(../../../../../assets/images/reviews/first/IMG_6208.JPG)',
                    'background-position': 'center',
                    'background-size': 'cover',
                }
            },
        ],
        information: {
            title: 'Перетяжка трёх местного дивана с каретной стяжкой',
            task: 'К нам обратился клиент с просьбой восстановить один диван и одно кресло так, чтобы по дизайну и цвету ткани мебель сочеталась с внутренним интерьером дома',
            work: 'Заменили полностью внутреннее наполнение Подобрали ткань в сочетание с дизайном интерьера Перетянули диван тканью Велюр',
            result: 'Управились за 12 дней. Сами забрали и привезли обратно. Клиент в восторге! 100% попадание в цвет и дизайн.',
        },
        video: {
            path: '../../../../../assets/images/reviews/first/review1.mp4',
        }
    },
    {
        main: {
            image: '../../../../../assets/images/reviews/second/20200720_114625.jpg',
        },
        sub: [
            {
                image: '../../../../../assets/images/reviews/second/IMG_6197.JPG',
                style: {
                    'background-image': 'url(../../../../../assets/images/reviews/second/IMG_6197.JPG)',
                    'background-position': 'center',
                    'background-size': 'cover',
                }
            },
            {
                image: '../../../../../assets/images/reviews/second/IMG_6199.JPG',
                style: {
                    'background-image': 'url(../../../../../assets/images/reviews/second/IMG_6199.JPG)',
                    'background-position': 'center',
                    'background-size': 'cover',
                }
            },
            {
                image: '../../../../../assets/images/reviews/second/IMG_6198.JPG',
                style: {
                    'background-image': 'url(../../../../../assets/images/reviews/second/IMG_6198.JPG)',
                    'background-position': 'center',
                    'background-size': 'cover',
                }
            },
        ],
        information: {
            title: 'Перетяжка трёх местного дивана с каретной стяжкой',
            task: 'Отреставрировать и перетянуть диван, пуф и 3 кресла ',
            work: 'Подобрали подходящую ткань. Восстановили каркас. Заменили наполнение. Перетянули тканью Жаккард. Сами забрали и доставили обратно',
            result: 'Управились за 18 дней. Сохранили шарм и стиль мебели. Клиент остался очень доволен нашей работой',
        },
        video: {
            path: '../../../../../assets/images/reviews/second/review2.mp4',
        }
    },
    {
        main: {
            image: '../../../../../assets/images/reviews/third/IMG_6214.jpg',
        },
        sub: [
            {
                image: '../../../../../assets/images/reviews/third/IMG_6214.jpg',
                style: {
                    'background-image': 'url(../../../../../assets/images/reviews/third/IMG_6214.jpg)',
                    'background-position': 'center',
                    'background-size': 'cover',
                }
            },
            {
                image: '../../../../../assets/images/reviews/third/IMG_6211.JPG',
                style: {
                    'background-image': 'url(../../../../../assets/images/reviews/third/IMG_6211.JPG)',
                    'background-position': 'center',
                    'background-size': 'cover',
                }
            },
            {
                image: '../../../../../assets/images/reviews/third/IMG_6213.JPG',
                style: {
                    'background-image': 'url(../../../../../assets/images/reviews/third/IMG_6213.JPG)',
                    'background-position': 'center',
                    'background-size': 'cover',
                }
            },
        ],
        information: {
            title: 'Перетяжка трёх местного дивана с каретной стяжкой',
            task: 'Оперативно за 6 дней перетянуть 7 стульев и восстановить каркас',
            work: 'Подобрали ткань с эффектом натуральной кожи. Заменили наполнение. Отреставрировали каркас стульев',
            result: 'Управились за 5 дней. Доставили на 6 день утром. Сами забрали и привезли обратно. Благодарный и довольный заказчик. ',
        },
        video: {
            path: '../../../../../assets/images/reviews/third/review3.mp4',
        }
    },
];

@Component({
    selector: 'app-recomended-block',
    templateUrl: './recomended-block.component.html',
    styleUrls: ['./recomended-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecomendedBlockComponent implements OnInit {

    public tabList = [
        {
            displayName: 'задача',
            description: ''
        }
    ];

    activeItemIndex = 0;

    slides = CONTENT;


    currentText$: BehaviorSubject<string> = new BehaviorSubject<string>('');


    popupOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    popupConfig = {
        height: '600px',
        width: '800px',
        background: '#000'
    };

    constructor() { }

    ngOnInit(): void {

    }

    openPopup() {
        this.popupOpened$.next(true);
    }

    closePopup() {
        this.popupOpened$.next(false);
    }

    tabClick(html: HTMLElement) {
        const text = html.innerText;

        html.parentElement.childNodes
            .forEach((node: HTMLElement) => {
                node.classList.remove('_active');
            });

        html.classList.add('_active');

        switch (text) {
            case 'ЧТО СДЕЛАЛИ':
                this.currentText$.next(this.slides[this.activeItemIndex].information.work);
                break;
            case 'ЗАДАЧА':
                this.currentText$.next(this.slides[this.activeItemIndex].information.task);
                break;
            case 'РЕЗУЛЬТАТ':
                this.currentText$.next(this.slides[this.activeItemIndex].information.result);
                break;
        }
    }

}
