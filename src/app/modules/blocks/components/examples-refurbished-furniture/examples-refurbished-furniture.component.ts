import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'block-examples-refurbished-furniture',
    templateUrl: './examples-refurbished-furniture.component.html',
    styleUrls: ['./examples-refurbished-furniture.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesRefurbishedFurnitureComponent implements OnInit, OnChanges {


    @Input()
    examples: {
        first: {
            image: string;
        },
        second: {
            image: string;
        }
    }[];

    constructor() { }

    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges): void {
    }

}
