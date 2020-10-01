import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-bonus-block',
    templateUrl: './bonus-block.component.html',
    styleUrls: ['./bonus-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BonusBlockComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
