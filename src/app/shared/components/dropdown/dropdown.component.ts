import {
    Component, ChangeDetectionStrategy, ElementRef, EventEmitter, HostBinding,
    HostListener, Inject, Input, Output, QueryList, ViewChild, ViewChildren
} from '@angular/core';
import { SidebarMenuItem } from '../../interfaces/sidebar-menu-item';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

    @Input()
    items: any[]

    @Input()
    value: string;

    @Output()
    valueChange = new EventEmitter<string>();

    @Output()
    itemSelected = new EventEmitter<{ items: any[]; item: any; }>();

    @HostBinding('class._opened')
    @Input()
    opened = false;

    readonly optionFilters = {
        // tslint:disable-next-line: object-literal-key-quotes
        'mousemove': ({ target }: MouseEvent) =>
            target !== document.activeElement,
        'keydown.arrowDown': ({ target }: KeyboardEvent) =>
            this.options.last.nativeElement !== target,
        'keydown.arrowUp': ({ target }: KeyboardEvent) =>
            this.options.first.nativeElement !== target,
    };

    @ViewChild('input')
    private readonly input: ElementRef;

    @ViewChildren('option')
    private readonly options: QueryList<ElementRef>;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef,
    ) {

    }

    @HostBinding('class._focused')
    get focused(): boolean {
        return this.elementRef.nativeElement.contains(document.activeElement);
    }

    @HostListener('keydown.esc.filtered.stop')
    onEsc() {
        this.input.nativeElement.focus();
        this.opened = false;
    }

    @HostListener('focusout.filtered')
    onBlur() {
        this.opened = false;
    }

    onClick() {
        this.opened = !this.opened;
    }

    onSelect(value: string) {
        this.input.nativeElement.focus();
        this.value = value;
        this.valueChange.emit(value);
        this.opened = false;
    }

    onInputArrowDown() {
        if (!this.options.first) {
            this.opened = true;
        } else {
            this.options.first.nativeElement.focus();
        }
    }

    onArrowDown(currentIndex: number) {
        this.options.find((item, index) => index === currentIndex + 1).nativeElement.focus();
    }

    onArrowUp(currentIndex: number) {
        this.options.find((item, index) => index === currentIndex - 1).nativeElement.focus();
    }

    itemClick(items: any[], item: any): void {
        this.itemSelected.emit(
            {
                items,
                item,
            }
        );
    }

    toggleActive(html: HTMLElement): void {
        html.classList.toggle('active');
    }
}
