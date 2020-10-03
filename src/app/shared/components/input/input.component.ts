import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'obbey-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObbeyInputComponent implements OnInit, ControlValueAccessor {

    @HostBinding('attr.data-host-size')
    @Input()
    size: 's' | 'm' | 'l';

    @Input()
    placeholder: string;

    @Input()
    required: boolean;


    formControl = new FormControl();

    constructor() { }

    writeValue(obj: any): void {
        throw new Error('Method not implemented.');
    }
    registerOnChange(fn: any): void {
        throw new Error('Method not implemented.');
    }
    registerOnTouched(fn: any): void {
        throw new Error('Method not implemented.');
    }
    setDisabledState?(isDisabled: boolean): void {
        throw new Error('Method not implemented.');
    }

    ngOnInit(): void {
    }

}
