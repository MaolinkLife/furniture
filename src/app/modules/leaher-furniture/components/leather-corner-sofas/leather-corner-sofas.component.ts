import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SHIELD_ITEMS_LEATHER_FURNITURE_V2 } from 'src/app/shared/mock/shield-items-leather-furniture';
import { PopupService } from 'src/app/shared/services/popup.service';

@Component({
    selector: 'app-leather-corner-sofas',
    templateUrl: './leather-corner-sofas.component.html',
    styleUrls: ['./leather-corner-sofas.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeatherCornerSofasComponent implements OnInit {

    elements = SHIELD_ITEMS_LEATHER_FURNITURE_V2;

    constructor(private popupService: PopupService) { }

    ngOnInit(): void {
    }

    openPopup(): void {
        this.popupService.showPopup();
    }

}
