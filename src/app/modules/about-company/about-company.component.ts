import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup.service';

@Component({
    selector: 'app-about-company',
    templateUrl: './about-company.component.html',
    styleUrls: ['./about-company.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutCompanyComponent {

    constructor(private popupService: PopupService) { }

    openPopup(): void {
        this.popupService.showPopup();
    }
}
