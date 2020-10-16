import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SHIELD_ITEMS_LEATHER_FURNITURE } from 'src/app/shared/mock/shield-items-leather-furniture';
import { PopupService } from 'src/app/shared/services/popup.service';

@Component({
    selector: 'app-leather-straight-sofas',
    templateUrl: './leather-straight-sofas.component.html',
    styleUrls: ['./leather-straight-sofas.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeatherStraightSofasComponent {

    public elements = SHIELD_ITEMS_LEATHER_FURNITURE;

    constructor(private popupService: PopupService) { }

    openPopup(): void {
        this.popupService.showPopup();
    }

}
