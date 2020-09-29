import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-designer-order-block',
    templateUrl: './designer-order-block.component.html',
    styleUrls: ['./designer-order-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignerOrderBlockComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
