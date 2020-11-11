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



    items = [
        {
            firstBlock: {
                image: '../../../../../assets/images/examples/main-page/expl-b1.jpg',
            },
            secondBlock: {
                image: '../../../../../assets/images/examples/main-page/expl-a1.jpg',
            },
        },
        {
            firstBlock: {
                image: '../../../../../assets/images/examples/main-page/expl-b2.jpg',
            },
            secondBlock: {
                image: '../../../../../assets/images/examples/main-page/expl-a2.jpg',
            },
        },
        {
            firstBlock: {
                image: '../../../../../assets/images/examples/main-page/expl-b3.jpg',
            },
            secondBlock: {
                image: '../../../../../assets/images/examples/main-page/expl-a3.jpg',
            },
        },
        {
            firstBlock: {
                image: '../../../../../assets/images/examples/main-page/expl-b4.jpg',
            },
            secondBlock: {
                image: '../../../../../assets/images/examples/main-page/expl-a4.jpg',
            },
        },
        {
            firstBlock: {
                image: '../../../../../assets/images/examples/main-page/expl-b5.jpg',
            },
            secondBlock: {
                image: '../../../../../assets/images/examples/main-page/expl-a5.jpg',
            },
        },
        {
            firstBlock: {
                image: '../../../../../assets/images/examples/main-page/expl-b6.jpg',
            },
            secondBlock: {
                image: '../../../../../assets/images/examples/main-page/expl-a6.jpg',
            },
        },

        {
            firstBlock: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/74959896_599889863925927_3958631416663603649_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=orrPQCdEv4cAX_7FvNY&_nc_tp=18&oh=d84367bfdbffc7c4a59ed1e178966a66&oe=5FBD653A',
            },
            secondBlock: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/73212863_563269614511792_2277505714588699698_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=nZD4kow0rPwAX_7rYHo&_nc_tp=18&oh=e48234820c128dd2e8441ba2d5cbce2f&oe=5FBA77F1',
            },
        },
        {
            firstBlock: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/64443743_347947166136292_104492508297886915_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=FjSW-DeMUPEAX-M1ug7&_nc_tp=18&oh=195aa4b015213d60d9a22a1019c3441f&oe=5FBA7546',
            },
            secondBlock: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/66429490_156199282190357_8535752205649926259_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=zOudDbe9bo4AX-BJC_H&_nc_tp=18&oh=802049a4d5fef6e16fde1dcc214c0602&oe=5FBB1958',
            },
        },
    ];

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
