import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-chairs',
    templateUrl: './chairs.component.html',
    styleUrls: ['./chairs.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChairsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
