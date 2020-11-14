import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-examples-catalog',
    templateUrl: './examples-catalog.component.html',
    styleUrls: ['./examples-catalog.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesCatalogComponent implements OnInit, OnChanges {
    showModal$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    targetSrc$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    activeItemIndex = 0;

    @Input()
    list: Record<string, Record<string, string>>[];

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
