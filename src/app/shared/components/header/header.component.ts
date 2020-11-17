import { Router, ActivatedRoute } from '@angular/router';
import { NavigationsService } from './../../modules/navigations/navigations.service';
import { BehaviorSubject } from 'rxjs';
import { PreviewComponentClass } from './../../types/preview-component-class.type';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

interface HeaderMenuItemInterface {
    caption: string;
    routerLink: string;
    active: boolean;
    id: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
    @Input()
    showMenu: boolean;

    component$: BehaviorSubject<PreviewComponentClass<Component>> | any =
        new BehaviorSubject<PreviewComponentClass<Component>>(null);

    menuItems: HeaderMenuItemInterface[] = [
        {
            caption: 'Главная',
            routerLink: '',
            active: false,
            id: 'general',
        },
        {
            caption: 'Рассчитать стоимость',
            routerLink: '',
            active: true,
            id: 'payment',
        },
        {
            caption: 'Примеры работ',
            routerLink: '',
            active: false,
            id: 'examples',
        },
        {
            caption: 'Гарантии',
            routerLink: '',
            active: false,
            id: 'garant',
        },
        {
            caption: 'Отзывы',
            routerLink: '',
            active: false,
            id: 'social',
        },
        {
            caption: 'Контакты',
            routerLink: '',
            active: false,
            id: 'contact',
        },
    ];

    constructor(
        private navigationsService: NavigationsService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {

    }

    ngOnInit(): void {
        this.component$ = this.navigationsService.dynamicComponentView$;
    }
}
