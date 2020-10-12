import { Component, ChangeDetectionStrategy, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent {
    @Output()
    closed = new EventEmitter<void>();

    @HostListener('window:keydown.esc')
    onEsc() {
        this.closed.emit();
    }
}
