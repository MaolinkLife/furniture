import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-map-block',
    templateUrl: './map-block.component.html',
    styleUrls: ['./map-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapBlockComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
