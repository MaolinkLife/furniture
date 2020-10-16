import { SHIELD_ITEMS_LEATHER_FURNITURE_V2 } from 'src/app/shared/mock/shield-items-leather-furniture';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup.service';

@Component({
    selector: 'app-leather-poufs-and-banquets',
    templateUrl: './leather-poufs-and-banquets.component.html',
    styleUrls: ['./leather-poufs-and-banquets.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeatherPoufsAndBanquetsComponent implements OnInit {

    elements = SHIELD_ITEMS_LEATHER_FURNITURE_V2;

    constructor(private popupService: PopupService) { }

    ngOnInit(): void {
    }

    openPopup(): void {
        this.popupService.showPopup();
    }

}
