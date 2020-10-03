import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'block-progress-work',
    templateUrl: './progress-work.component.html',
    styleUrls: ['./progress-work.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressWorkComponent implements OnInit {
    elements = [
        {
            caption: 'ремонт каркаса мебели',
            image: '',
        },
        {
            caption: 'Полностью меняем наполнение мебели на новое и качественное.Именно благодаря наполнению, изделие не меняет своей формы со временем',
            image: '../../../../../assets/images/Rectangle46.png',
        },
        {
            caption: 'Перетяжка новой тканью или кожей',
            image: '',
        },
        {
            caption: 'Упаковка и доставка мебели обратно',
            image: '',
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
