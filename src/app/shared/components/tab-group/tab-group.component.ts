import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-tab-group',
    templateUrl: './tab-group.component.html',
    styleUrls: ['./tab-group.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabGroupComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
