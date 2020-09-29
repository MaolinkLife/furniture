import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-icon',
    templateUrl: './icons.component.html',
    styleUrls: ['./icons.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconsComponent implements OnInit {
    @Input()
    name: string;

    constructor() { }

    ngOnInit(): void {
    }

}
