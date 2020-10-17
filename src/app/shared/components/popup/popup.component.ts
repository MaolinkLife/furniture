import { Component, ChangeDetectionStrategy, EventEmitter, HostListener, Output, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'obbey-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent {
    @Input()
    backgroundConfig: object;

    @Output()
    closed = new EventEmitter<void>();


    @HostListener('window:keydown.esc')
    onEsc() {
        this.closed.emit();
    }

    closePopup(): void {
        this.closed.emit();
    }

}
