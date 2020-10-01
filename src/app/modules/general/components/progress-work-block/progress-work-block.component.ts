import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-progress-work-block',
    templateUrl: './progress-work-block.component.html',
    styleUrls: ['./progress-work-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressWorkBlockComponent implements OnInit {
    elements = [
        {
            caption: 'ремонт каркаса мебели',
            image: '',
        },
        {
            caption: 'Полностью меняем наполнение мебели на новое и качественное.Именно благодаря наполнению, изделие не меняет своей формы со временем',
            image: '',
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
