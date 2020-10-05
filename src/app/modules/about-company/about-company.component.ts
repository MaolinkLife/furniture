import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-about-company',
    templateUrl: './about-company.component.html',
    styleUrls: ['./about-company.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutCompanyComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
