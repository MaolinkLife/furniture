import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup.service';

@Component({
    selector: 'app-chairs',
    templateUrl: './chairs.component.html',
    styleUrls: ['./chairs.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChairsComponent implements OnInit {

    elements = [
        {
            description: 'Без переплат и посредников',
        },
        {
            description: 'Сами заберем и доставим обратно',
        },
        {
            description: 'Цвет и материал на любой вкус',
        },
        {
            description: 'Своё собственное производство с 2009 года',
        },
    ];

    constructor(private popupService: PopupService) { }

    ngOnInit(): void {
    }

    openPopup(): void {
        this.popupService.showPopup();
    }
}
