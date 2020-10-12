import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-leather-straight-sofas',
    templateUrl: './leather-straight-sofas.component.html',
    styleUrls: ['./leather-straight-sofas.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeatherStraightSofasComponent implements OnInit {


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
