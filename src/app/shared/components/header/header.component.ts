import { PreviewComponentClass } from './../../types/preview-component-class.type';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

interface HeaderMenuItemInterface {
    caption: string;
    routerLink: string;
    active: boolean;
}

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
    previewComponent: PreviewComponentClass<Component>;

    menuItems: HeaderMenuItemInterface[] = [
        {
            caption: 'Главная',
            routerLink: '',
            active: false,
        },
        {
            caption: 'Расчитать стоимость',
            routerLink: '',
            active: true,
        },
        {
            caption: 'Примеры работ',
            routerLink: '',
            active: false,
        },
        {
            caption: 'Гарантии',
            routerLink: '',
            active: false,
        },
        {
            caption: 'Отзывы',
            routerLink: '',
            active: false,
        },
        {
            caption: 'Контакты',
            routerLink: '',
            active: false,
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }
}
