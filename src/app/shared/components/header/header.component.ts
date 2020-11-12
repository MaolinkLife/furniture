import { Router, ActivatedRoute } from '@angular/router';
import { NavigationsService } from './../../modules/navigations/navigations.service';
import { BehaviorSubject } from 'rxjs';
import { PreviewComponentClass } from './../../types/preview-component-class.type';
import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GeneralPreviewComponentComponent } from 'src/app/modules/general/components/general-preview-component/general-preview-component.component';

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
export class HeaderComponent implements OnInit, OnChanges {
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
            caption: 'Расчитать стоимость',
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
        console.log(this.activatedRoute);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    menuClick(element: HTMLElement, id?: string) {
        element.classList.toggle('active');
        this.component$.next(GeneralPreviewComponentComponent);

        this.router.navigateByUrl('');

        setTimeout(() => {
            if (id) {
                if (document.getElementById(id)) {
                    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, 100);


    }
}
