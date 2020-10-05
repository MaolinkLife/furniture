import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {

    accordionItems = [
        {
            title: 'что такое перетяжка мебели?',
            description: 'Это замена обивочной ткани и внутреннего наполнителя мебели с учётом всех ваших пожеланий',
        },
        {
            title: 'Что даёт перетяжка мебели?',
            description: 'Это замена обивочной ткани и внутреннего наполнителя мебели с учётом всех ваших пожеланий',
        },
        {
            title: 'что такое перетяжка мебели?',
            description: 'Это замена обивочной ткани и внутреннего наполнителя мебели с учётом всех ваших пожеланий',
        },
        {
            title: 'Что даёт перетяжка мебели?',
            description: 'Это замена обивочной ткани и внутреннего наполнителя мебели с учётом всех ваших пожеланий',
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }


    toggleActive(elementRef) {
        elementRef.classList.toggle('active');
        const panel = elementRef.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    }

}
