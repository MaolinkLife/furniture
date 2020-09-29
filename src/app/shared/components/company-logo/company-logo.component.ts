import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-company-logo',
    templateUrl: './company-logo.component.html',
    styleUrls: ['./company-logo.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyLogoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
