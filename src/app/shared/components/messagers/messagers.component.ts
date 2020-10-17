import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'obbey-messagers',
    templateUrl: './messagers.component.html',
    styleUrls: ['./messagers.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagersComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
