import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup.service';

@Component({
    selector: 'app-leather-armchair',
    templateUrl: './leather-armchair.component.html',
    styleUrls: ['./leather-armchair.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeatherArmchairComponent implements OnInit {

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

    constructor(private popupService: PopupService) { }

    ngOnInit(): void {
    }

    openPopup(): void {
        this.popupService.showPopup();
    }


}
