import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-furniture-care',
    templateUrl: './furniture-care.component.html',
    styleUrls: ['./furniture-care.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FurnitureCareComponent implements OnInit {


    itemList = [
        {
            name: 'Флок',
            description: '- служит долго и верно, но не допускает спирта и других растворителей.Уход за флоком осуществляется только составами на водной основе.Лучший друг флока - пылесос, от него у материала может появиться эффектный блеск',
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
