import { CarouselComponent } from './carousel.component';
import { Directive, forwardRef, Inject, Input, SkipSelf, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[carouselItem]'
})
export class ItemConnectorDirective {
    @Input()
    carouselItem: TemplateRef<HTMLElement>;


    constructor(
        readonly templateRef: TemplateRef<{}>
    ) {

    }
}
