import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-general-preview-component',
    templateUrl: './general-preview-component.component.html',
    styleUrls: ['./general-preview-component.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralPreviewComponentComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
