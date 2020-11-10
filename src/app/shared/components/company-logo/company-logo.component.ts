import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-company-logo',
    templateUrl: './company-logo.component.html',
    styleUrls: ['./company-logo.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyLogoComponent implements OnInit {

    @Input()
    type = 'WEB';

    constructor() { }

    ngOnInit(): void {
    }

}
