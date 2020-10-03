import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'obbey-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObbeyFormComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
