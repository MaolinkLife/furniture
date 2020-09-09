import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

    sidebarItems = [
        {
            name: 'Петеряжка мягкой мебели',
            active: false,
        },
        {
            name: 'Работа с натуральной кожей',
            active: false,
        },
        {
            name: 'Портфолио работ',
            active: false,
        },
        {
            name: 'Каталог тканей',
            active: true,
        },
        {
            name: 'Бары, кафе, рестораны, офисы',
            active: false,
        },
        {
            name: 'Доставка и оплата',
            active: false,
        },
        {
            name: 'Как мы работаем',
            active: false,
        },
        {
            name: 'О компании',
            active: false,
        },
        {
            name: 'Отзывы',
            active: false,
        },
        {
            name: 'Как заказать',
            active: false,
        },
        {
            name: 'Уход за мебелью',
            active: false,
        },
        {
            name: 'Вопрос - ответ',
            active: false,
        },
    ];

    menuitems = [
        {
            name: 'Вопрос - ответ',
            active: false,
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

    toggleActive(index: number) {
        this.sidebarItems.forEach(el => el.active = false);
        this.sidebarItems[index].active = true;
    }
}
