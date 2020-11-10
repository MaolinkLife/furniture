import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

    showModal$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    targetSrc$: BehaviorSubject<string> = new BehaviorSubject<string>('');


    get mobileVersion(): boolean {
        const offsetWidth = document.body.offsetWidth;

        return offsetWidth <= 375;
    }


    constructor() { }

    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges): void {
    }


    onClickImage(src: string): void {
        this.showModal$.next(true);
        this.targetSrc$.next(src);
    }

    closePopup(): void {
        this.showModal$.next(false);
        this.targetSrc$.next(null);
    }

}
