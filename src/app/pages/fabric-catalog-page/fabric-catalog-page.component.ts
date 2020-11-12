import { PopupService } from './../../shared/services/popup.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-fabric-catalog-page',
    templateUrl: './fabric-catalog-page.component.html',
    styleUrls: ['./fabric-catalog-page.component.less'],
})
export class FabricCatalogPageComponent implements OnInit {

    formGroup: FormGroup = new FormGroup({});

    constructor() { }

    ngOnInit(): void {
    }

}
