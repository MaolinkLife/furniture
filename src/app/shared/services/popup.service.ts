import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PopupService {


    public popupOpened$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    showPopup(): void {
        this.popupOpened$.next(true);
    }

    hidePopup(): void {
        this.popupOpened$.next(false);
    }

    constructor() { }
}
