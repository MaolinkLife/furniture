import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-fabric-catalog',
    templateUrl: './fabric-catalog.component.html',
    styleUrls: ['./fabric-catalog.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FabricCatalogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
