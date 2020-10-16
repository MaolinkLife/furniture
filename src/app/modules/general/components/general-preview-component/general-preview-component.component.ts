import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup.service';

@Component({
    selector: 'app-general-preview-component',
    templateUrl: './general-preview-component.component.html',
    styleUrls: ['./general-preview-component.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralPreviewComponentComponent {

    constructor(private popupService: PopupService) { }

    openPopup(): void {
        this.popupService.showPopup();
    }

}
