import { BehaviorSubject } from 'rxjs';
import { GeneralPreviewComponentComponent } from './../../modules/general/components/general-preview-component/general-preview-component.component';
import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { registerLocaleData } from '@angular/common';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit, OnChanges {
    isHomePage = true;

    component = GeneralPreviewComponentComponent;


    popupOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() { }

    ngOnInit(): void {
    }


    openPopup() {
        this.popupOpened$.next(true);
    }

    closePopup() {
        this.popupOpened$.next(false);
    }

    ngOnChanges(): void {

    }

    toggleActive(index: number, array: { name: string; active: boolean }[]) {
        array.forEach(el => el.active = false);
        array[index].active = true;
    }
}
