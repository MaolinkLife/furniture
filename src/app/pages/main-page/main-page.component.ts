import { PopupService } from './../../shared/services/popup.service';
import { BehaviorSubject } from 'rxjs';
import { GeneralPreviewComponentComponent } from './../../modules/general/components/general-preview-component/general-preview-component.component';
import { Component, OnInit, ChangeDetectionStrategy, OnChanges, HostListener } from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit, OnChanges {

    isHomePage = true;

    component = GeneralPreviewComponentComponent;

    showButton = false;

    popupOpened$: BehaviorSubject<boolean>;

    @HostListener('window:scroll', ['$event'])
    toggleScroll(): void {
        this.showButton = window.pageYOffset > 100;
    }


    constructor(private popupService: PopupService) { }

    ngOnInit(): void {
        this.popupOpened$ = this.popupService.popupOpened$;


        this.popupService.popupOpened$.subscribe(e => console.log(e));
    }


    openPopup() {
        this.popupOpened$.next(true);
    }

    closePopup() {
        this.popupOpened$.next(false);
    }

    ngOnChanges(): void {
        console.log('changes');
    }

    toggleActive(index: number, array: { name: string; active: boolean }[]) {
        array.forEach(el => el.active = false);
        array[index].active = true;
    }

    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
