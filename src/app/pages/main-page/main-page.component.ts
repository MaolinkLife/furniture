import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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

    menuItems = [
        {
            name: 'Главная',
            active: false,
        },
        {
            name: 'Расчитать стоимость',
            active: true,
        },
        {
            name: 'Примеры работ',
            active: false,
        },
        {
            name: 'Гарантии',
            active: false,
        },
        {
            name: 'Отзывы',
            active: false,
        },
        {
            name: 'Контакты',
            active: false,
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

    toggleActive(index: number, array: Record<string, string | boolean>[]) {
        array.forEach(el => el.active = false);
        array[index].active = true;
    }
}
