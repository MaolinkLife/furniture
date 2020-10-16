import { BehaviorSubject } from 'rxjs';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-general-page',
    templateUrl: './general-page.component.html',
    styleUrls: ['./general-page.component.less']
})
export class GeneralPageComponent implements OnInit {

    private scrollToElement = true;

    scroll$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    @HostListener('window:scroll', ['$event'])
    scroll() {
        const block = document.getElementById('benefit');
        if (window.pageYOffset > block.offsetTop && this.scrollToElement && window.pageYOffset < (block.offsetTop + block.offsetHeight)) {
            this.scrollToElement = false;
            this.startTimer();
        }
    }

    constructor() { }

    ngOnInit(): void { }


    startTimer(): void {
        this.scroll$.next(true);
    }

}
