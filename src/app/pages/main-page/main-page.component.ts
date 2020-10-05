import { GeneralPreviewComponentComponent } from './../../modules/general/components/general-preview-component/general-preview-component.component';
import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit, OnChanges {
    isHomePage = true;

    component = GeneralPreviewComponentComponent;

    constructor(

    ) { }

    ngOnInit(): void {
        console.log('start');
    }

    ngOnChanges(): void {

    }

    toggleActive(index: number, array: { name: string; active: boolean }[]) {
        array.forEach(el => el.active = false);
        array[index].active = true;
    }
}
