import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-poufs-and-banquets',
    templateUrl: './poufs-and-banquets.component.html',
    styleUrls: ['./poufs-and-banquets.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoufsAndBanquetsComponent implements OnInit {

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
    constructor() { }

    ngOnInit(): void {
    }

}
