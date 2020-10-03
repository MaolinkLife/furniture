import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-padding-furniture-preview',
    templateUrl: './padding-furniture-preview.component.html',
    styleUrls: ['./padding-furniture-preview.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaddingFurniturePreviewComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
