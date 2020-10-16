import { SHIELD_ITEMS_LEATHER_FURNITURE_V2 } from './../../../../shared/mock/shield-items-leather-furniture';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup.service';

@Component({
    selector: 'app-leahter-chairs',
    templateUrl: './leahter-chairs.component.html',
    styleUrls: ['./leahter-chairs.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeahterChairsComponent implements OnInit {


    elements = SHIELD_ITEMS_LEATHER_FURNITURE_V2;

    constructor(private popupService: PopupService) { }

    ngOnInit(): void {
    }

    openPopup(): void {
        this.popupService.showPopup();
    }


}
