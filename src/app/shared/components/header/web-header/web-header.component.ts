import { Component, OnInit, ChangeDetectionStrategy, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GeneralPreviewComponentComponent } from 'src/app/modules/general/components/general-preview-component/general-preview-component.component';
import { NavigationsService } from 'src/app/shared/modules/navigations/navigations.service';
import { PreviewComponentClass } from 'src/app/shared/types/preview-component-class.type';

interface HeaderMenuItemInterface {
    caption: string;
    routerLink: string;
    active: boolean;
    id: string;
}

@Component({
    selector: 'app-web-header',
    templateUrl: './web-header.component.html',
    styleUrls: ['./web-header.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebHeaderComponent implements OnInit, OnChanges {

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

    ngOnChanges(changes: SimpleChanges): void {
        (changes);
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
