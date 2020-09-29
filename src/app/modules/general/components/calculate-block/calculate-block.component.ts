import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-calculate-block',
    templateUrl: './calculate-block.component.html',
    styleUrls: ['./calculate-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculateBlockComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
