import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-social-block',
    templateUrl: './social-block.component.html',
    styleUrls: ['./social-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialBlockComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
