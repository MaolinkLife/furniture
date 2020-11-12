import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
    Component, ChangeDetectionStrategy, HostBinding, ElementRef,
    EventEmitter, HostListener, Inject, Input, Output, QueryList, ViewChild, ViewChildren, OnInit, forwardRef
} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'obbey-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.less'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true,
        }
    ],
})
export class SelectComponent implements ControlValueAccessor, OnInit {

    @Input()
    items: string[];

    @Input()
    value: string;

    @Output()
    valueChange = new EventEmitter<string>();

    @HostBinding('class._opened')
    opened = false;

    public readonly formControl: FormControl = new FormControl();
    public readonly disabled$: BehaviorSubject<boolean> = new BehaviorSubject(false);

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

    private readonly componentDestroyed$: Subject<void> = new Subject();

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef,
        // @Inject(EventFiltersService) service: EventFiltersService,
    ) {
        // service.register({
        //     'keydown.esc': () => this.opened,
        //     'focusout': ({ relatedTarget }: FocusEvent) =>
        //         !this.elementRef.nativeElement.contains(relatedTarget),
        // });
    }

    ngOnInit(): void {
        this.formControl.valueChanges.pipe(
            takeUntil(this.componentDestroyed$),
        ).subscribe(
            (value: any) => this.onChange(value),
        );
    }

    writeValue(value: any): void {
        this.formControl.setValue(value, { emitEvent: false });
    }

    public registerOnChange(callback: (value: any) => void): void {
        this.onChange = callback;
    }

    public registerOnTouched(callback: () => void): void {
        this.onTouched = callback;
    }

    public setDisabledState(disabled: boolean): void {
        if (disabled) {
            this.formControl.disable({ emitEvent: false });
        } else {
            this.formControl.enable({ emitEvent: false });
        }
    }

    private onChange = (value: any): void => { };
    private onTouched = (): void => { };

    onClick() {
        this.opened = !this.opened;
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

    onSelect(value: string, input: ElementRef) {
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

}
