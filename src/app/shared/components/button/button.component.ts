import { Component, OnInit, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'obbey-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObbeyButtonComponent implements OnInit {

    @HostBinding('attr.data-host-size')
    @Input()
    size: 's' | 'l' | 'm';

    @HostBinding('attr.data-host-color')
    @Input()
    color: 'primary' | 'secondary';

    @HostBinding('attr.data-host-polygon')
    @Input()
    hasPolygon: boolean;

    @Input()
    hasIcon: boolean;

    @Input()
    uppercase: boolean;

    @Input()
    disabled: boolean;

    @Input()
    iconName: string;

    constructor() { }

    ngOnInit(): void {
    }

}
