import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-portfolio-of-works-page',
    templateUrl: './portfolio-of-works-page.component.html',
    styleUrls: ['./portfolio-of-works-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioOfWorksPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
