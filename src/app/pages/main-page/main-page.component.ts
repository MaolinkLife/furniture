import { Router } from '@angular/router';
import { PopupService } from './../../shared/services/popup.service';
import { BehaviorSubject } from 'rxjs';
import { GeneralPreviewComponentComponent } from './../../modules/general/components/general-preview-component/general-preview-component.component';
import { Component, OnInit, ChangeDetectionStrategy, OnChanges, HostListener } from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.less'],
})
export class MainPageComponent implements OnInit, OnChanges {


    constructor(
        private popupService: PopupService,
        private router: Router,
    ) { }

    isHomePage = true;

    component = GeneralPreviewComponentComponent;

    showButton = false;

    popupOpened$: BehaviorSubject<boolean>;

    popupBackground = {
        'background-image': 'url(../../../../../assets/images/popup-background.png)',
        'background-position': 'center',
        'background-size': 'cover',
        'background-repeat': 'no-repeat'
    };

    @HostListener('window:scroll', ['$event'])
    toggleScroll(): void {
        this.showButton = window.pageYOffset > 100;
    }

    ngOnInit(): void {
        this.popupOpened$ = this.popupService.popupOpened$;
    }

    openPopup() {
        this.popupOpened$.next(true);
    }

    closePopup(accept: boolean) {
        this.popupOpened$.next(false);

        if (accept) {
            this.router.navigateByUrl('complete');
        }
    }

    ngOnChanges(): void {
    }

    toggleActive(index: number, array: { name: string; active: boolean }[]) {
        array.forEach(el => el.active = false);
        array[index].active = true;
    }

    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
