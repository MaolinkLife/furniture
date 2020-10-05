import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'block-furniture-protection',
    templateUrl: './furniture-protection.component.html',
    styleUrls: ['./furniture-protection.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FurnitureProtectionComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
