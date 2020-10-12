import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-leather-poufs-and-banquets',
    templateUrl: './leather-poufs-and-banquets.component.html',
    styleUrls: ['./leather-poufs-and-banquets.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeatherPoufsAndBanquetsComponent implements OnInit {

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
