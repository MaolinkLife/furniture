import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-armchairs',
    templateUrl: './armchairs.component.html',
    styleUrls: ['./armchairs.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArmchairsComponent implements OnInit {


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


    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
    }

}
