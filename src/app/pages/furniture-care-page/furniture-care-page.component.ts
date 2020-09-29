import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-furniture-care-page',
    templateUrl: './furniture-care-page.component.html',
    styleUrls: ['./furniture-care-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FurnitureCarePageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
