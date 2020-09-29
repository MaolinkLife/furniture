import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';

import { SidebarMenuItem } from '../../shared/interfaces/sidebar-menu-item';
import { SIDEBAR_MENU_ITEMS } from '../../shared/mock/sidebar-menu-items';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit, OnChanges {
    sidebarItems: SidebarMenuItem[] = SIDEBAR_MENU_ITEMS;

    isHomePage: boolean = true;

    menuItems: { caption: string; routerPath: string; active: boolean }[] = [
        {
            caption: 'Главная',
            routerPath: '',
            active: false,
        },
        {
            caption: 'Расчитать стоимость',
            routerPath: '',
            active: true,
        },
        {
            caption: 'Примеры работ',
            routerPath: '',
            active: false,
        },
        {
            caption: 'Гарантии',
            routerPath: '',
            active: false,
        },
        {
            caption: 'Отзывы',
            routerPath: '',
            active: false,
        },
        {
            caption: 'Контакты',
            routerPath: '',
            active: false,
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(): void {
        console.log('hello')
    }

    toggleActive(index: number, array: { name: string; active: boolean }[]) {
        array.forEach(el => el.active = false);
        array[index].active = true;
    }
}
