import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'obbey-flip-card',
    templateUrl: './flip-card.component.html',
    styleUrls: ['./flip-card.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObbeyFlipCardComponent implements OnInit {

    @Input()
    image: string;

    @Input()
    number: number;

    @Input()
    caption: string;


    @Input()
    outsideText: string;

    constructor() { }

    ngOnInit(): void {
    }

}
