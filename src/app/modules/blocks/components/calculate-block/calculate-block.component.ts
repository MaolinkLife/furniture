import { PopupService } from './../../../../shared/services/popup.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'block-calculate',
    templateUrl: './calculate-block.component.html',
    styleUrls: ['./calculate-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculateBlockComponent implements OnInit {

    constructor(private popupService: PopupService) { }

    ngOnInit(): void {
    }

    openPopup(): void {
        this.popupService.showPopup();
    }

    get mobileVersion(): boolean {
        const offsetWidth = document.body.offsetWidth;

        return offsetWidth <= 375;
    }

}
