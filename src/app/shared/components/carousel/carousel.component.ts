import {
    Component, OnInit, ChangeDetectionStrategy,
    Input, ContentChildren, QueryList, Output, EventEmitter, OnChanges, SimpleChanges, TemplateRef
} from '@angular/core';
import { ItemConnectorDirective } from './item-connector.directive';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'obbey-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {

    @Input()
    arrowPositionConfig: object;

    @Input()
    activeItemIndex = 0;

    @Output()
    activeItemIndexChange: EventEmitter<number> = new EventEmitter<number>(null);

    @ContentChildren(ItemConnectorDirective)
    readonly itemConnectors?: QueryList<ItemConnectorDirective>;


    @Input()
    templates: TemplateRef<HTMLElement>[];

    constructor() { }

    ngOnInit(): void {
    }

    previewSlide(index: number): void {
        this.activeItemIndex = index;
        this.activeItemIndexChange.emit(index);
    }

    clickNext(): void {
        this.activeItemIndex++;
        if (this.activeItemIndex >= this.itemConnectors.length) {
            this.activeItemIndex = 0;
        }

        this.activeItemIndexChange.emit(this.activeItemIndex);
    }

    clickPrev(): void {
        this.activeItemIndex--;
        if (this.activeItemIndex < 0) {
            this.activeItemIndex = this.itemConnectors.length - 1;
        }

        this.activeItemIndexChange.emit(this.activeItemIndex);
    }

}
