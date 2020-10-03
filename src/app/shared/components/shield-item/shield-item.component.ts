import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'obbey-shield-item',
    templateUrl: './shield-item.component.html',
    styleUrls: ['./shield-item.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShieldItemComponent implements OnInit {
    @Input()
    hasIcon = true;

    @Input()
    title: string;

    @Input()
    description: string;

    constructor() { }

    ngOnInit(): void {
    }

}
