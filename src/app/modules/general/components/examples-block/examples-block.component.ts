import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-examples-block',
    templateUrl: './examples-block.component.html',
    styleUrls: ['./examples-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesBlockComponent implements OnInit {

    slideIndex = [1, 1];

    constructor() { }

    ngOnInit(): void {
    }


    plusSlides(n, no) {
        this.showSlides(this.slideIndex[no] += n, no);
    }

    showSlides(n, no) {
        // var i;
        // var x = document.getElementsByClassName(this.slideId[no]);
        // if (n > x.length) { this.slideIndex[no] = 1 }
        // if (n < 1) { this.slideIndex[no] = x.length }
        // for (i = 0; i < x.length; i++) {
        //     x[i].style.display = "none";
        // }
        // x[this.slideIndex[no] - 1].style.display = "block";
    }
}
