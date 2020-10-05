import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-corner-sofas',
    templateUrl: './corner-sofas.component.html',
    styleUrls: ['./corner-sofas.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CornerSofasComponent implements OnInit {


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
