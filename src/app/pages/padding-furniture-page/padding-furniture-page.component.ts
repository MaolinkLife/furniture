import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'padding-furniture-page',
    templateUrl: './padding-furniture-page.template.html',
    styleUrls: ['./padding-furniture-page.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaddingFurniturePageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
