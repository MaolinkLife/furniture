import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SidebarMenuItem } from '../../interfaces/sidebar-menu-item';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    @Input()
    showMenu: boolean;

    @Input()
    menuItems: SidebarMenuItem[];

    homePageMenuItems: { caption: string; routerPath: string; active: boolean }[] = [
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


    toggleActive(index: number, array: { active: boolean }[]) {
        array.forEach(el => el.active = false);
        array[index].active = true;
    }

}
