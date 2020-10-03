import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-corner-sofas',
    templateUrl: './corner-sofas.component.html',
    styleUrls: ['./corner-sofas.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CornerSofasComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
