import { PopupService } from './../../shared/services/popup.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-bars',
    templateUrl: './bars.component.html',
    styleUrls: ['./bars.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarsComponent {

    constructor(private popupService: PopupService) { }

    openPopup(): void {
        this.popupService.showPopup();
    }

}
