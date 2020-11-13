import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit, ChangeDetectionStrategy, Input, HostListener } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'obbey-flip-card',
    templateUrl: './flip-card.component.html',
    styleUrls: ['./flip-card.component.less'],
})
export class ObbeyFlipCardComponent implements OnInit {

    @Input()
    image: string;

    @Input()
    number: number;

    @Input()
    caption: string;

    hovered = false;

    @Input()
    outsideText: string;

    constructor() { }

    ngOnInit(): void {
    }



    @HostListener('mouseenter')
    onFocus() {
        this.hovered = true;
    }

    @HostListener('click')
    onClick() {
        this.hovered = true;
    }

    @HostListener('mouseleave')
    onBlur() {
        this.hovered = false;
    }

}
