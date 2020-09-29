import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-responsibility-block',
    templateUrl: './responsibility-block.component.html',
    styleUrls: ['./responsibility-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsibilityBlockComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
