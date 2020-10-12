import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-leahter-chairs',
    templateUrl: './leahter-chairs.component.html',
    styleUrls: ['./leahter-chairs.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeahterChairsComponent implements OnInit {


    elements = [
        {
            description: 'Категории и цвета кожи под любой запрос',
        },
        {
            description: 'Полная материальная ответственность за качество нашей работы',
        },
        {
            description: 'Сами заберем мебель и доставим вам обратно',
        },
        {
            description: 'Мастера с практическим опытом работы по перетяжке изделий свыше 8 лет',
        },
        {
            description: 'Ценим ваше время - Ваше участие минимально',
        },
    ];


    constructor() { }

    ngOnInit(): void {
    }

}
