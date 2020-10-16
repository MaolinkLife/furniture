import { PopupService } from './../../../../shared/services/popup.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-headboards',
    templateUrl: './headboards.component.html',
    styleUrls: ['./headboards.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadboardsComponent implements OnInit {
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
