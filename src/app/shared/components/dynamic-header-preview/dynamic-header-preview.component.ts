import {
    Component, ChangeDetectionStrategy, Input, ViewContainerRef, ComponentFactoryResolver, OnChanges, SimpleChanges, ComponentFactory, Type
} from '@angular/core';
import { PreviewComponentInterface } from '../../interfaces/preview-component.interface';
import { PreviewComponentClass } from '../../types/preview-component-class.type';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'obbey-dynamic-header-preview',
    template: '',
})
export class DynamicHeaderPreviewComponent implements OnChanges {
    @Input()
    component: PreviewComponentClass<Component>;

    private previousComponentExists = false;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
    ) { }


    ngOnChanges(simpleChanges: SimpleChanges): void {
        if ('component' in simpleChanges) {
            this.createComponent();
        }
    }

    private createComponent(): void {
        this.destroyPreviousComponent();

        this.previousComponentExists = true;

        const componentFactory: ComponentFactory<PreviewComponentInterface<Component>> =
            this.componentFactoryResolver.resolveComponentFactory(this.component);

        this.viewContainerRef.createComponent(componentFactory);
    }

    private destroyPreviousComponent(): void {
        if (this.previousComponentExists) {
            this.viewContainerRef.remove(0);
        }
    }

}
