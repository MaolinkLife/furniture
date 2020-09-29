import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-about-company-page',
    templateUrl: './about-company-page.component.html',
    styleUrls: ['./about-company-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutCompanyPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
