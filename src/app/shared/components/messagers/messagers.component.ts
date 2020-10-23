import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'obbey-messagers',
    templateUrl: './messagers.component.html',
    styleUrls: ['./messagers.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagersComponent implements OnInit {

    @Input()
    scale: number;

    constructor() { }

    ngOnInit(): void {
    }

    get scaleElement(): object {
        return { transform: 'scale' + this.scale + '' };
    }

}
