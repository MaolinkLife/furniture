import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-examples-catalog',
    templateUrl: './examples-catalog.component.html',
    styleUrls: ['./examples-catalog.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesCatalogComponent implements OnInit, OnChanges {

    activeItemIndex = 0;

    @Input()
    list: [];

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

}
