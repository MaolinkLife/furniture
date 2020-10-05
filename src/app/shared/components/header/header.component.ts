import { NavigationsService } from './../../modules/navigations/navigations.service';
import { BehaviorSubject } from 'rxjs';
import { PreviewComponentClass } from './../../types/preview-component-class.type';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { GeneralPreviewComponentComponent } from 'src/app/modules/general/components/general-preview-component/general-preview-component.component';

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

    component$: BehaviorSubject<PreviewComponentClass<Component>> | any =
        new BehaviorSubject<PreviewComponentClass<Component>>(null);

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

    constructor(private navigationsService: NavigationsService) { }

    ngOnInit(): void {
        this.component$ = this.navigationsService.dynamicComponentView$;

    }

    menuClick(element: any) {
        element.classList.toggle('active');
        this.component$.next(GeneralPreviewComponentComponent);
    }
}
