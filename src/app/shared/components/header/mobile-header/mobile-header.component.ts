import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GeneralPreviewComponentComponent } from 'src/app/modules/general/components/general-preview-component/general-preview-component.component';
import { SidebarMenuItem } from 'src/app/shared/interfaces/sidebar-menu-item';
import { NavigationsService } from 'src/app/shared/modules/navigations/navigations.service';
import { PreviewComponentClass } from 'src/app/shared/types/preview-component-class.type';

@Component({
    selector: 'app-mobile-header',
    templateUrl: './mobile-header.component.html',
    styleUrls: ['./mobile-header.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileHeaderComponent implements OnInit, OnChanges {


    @Output()
    itemClick: EventEmitter<SidebarMenuItem> = new EventEmitter();

    public readonly menuItems$: BehaviorSubject<SidebarMenuItem[]>;


    public component$: BehaviorSubject<PreviewComponentClass<Component>> | any =
        new BehaviorSubject<PreviewComponentClass<Component>>(null);


    // public dropdownList = [
    //     {
    //         caption: 'ПЕРЕТЯЖКА МЯГКОЙ МЕБЕЛИ',
    //         routerLink: '/',
    //         active: false,
    //         children: [
    //             {
    //                 caption: 'Перетяжка прямых диванов',
    //                 routerLink: '/',
    //                 active: false,
    //             },
    //             {
    //                 caption: 'Перетяжка угловых диванов',
    //                 routerLink: '/',
    //                 active: false,
    //             }
    //         ]
    //     }
    // ];

    public opened = false;

    constructor(
        private router: Router,
        private navigationsService: NavigationsService,
        private activatedRoute: ActivatedRoute,
    ) {
        this.menuItems$ = this.navigationsService.sidebarMenuItems$;
    }

    ngOnInit(): void {
        this.menuItems$.subscribe(list => {
            console.log('list', list);
        });

        this.component$ = this.navigationsService.dynamicComponentView$;
        console.log('activated route', this.activatedRoute);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes', changes);
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
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }
        }, 100);


    }

    /**
     * Отвечает за переходы или раскрытие дочернего списка
     * @param menuItems - все элементы меню
     * @param item - текущий элемент меню, по которому происходит проверка, необходимо или перейти или раскрыть список
     */
    menuItemClick(value: { items: SidebarMenuItem[], item: SidebarMenuItem }) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        value.items.forEach((link: SidebarMenuItem) => link.active = false);
        value.item.active = true;

        if (!value.item.children) {
            this.router.navigateByUrl(value.item.routerPath);
            this.opened = !this.opened;
        } else {
            value.item.children.forEach((link: SidebarMenuItem) => link.active = false);

            if (document.body.offsetWidth <= 414) {
                value.item.active = true;
            } else {
                value.item.children[0].active = true;
                this.router.navigateByUrl(value.item.children[0].routerPath);
                this.opened = !this.opened;
            }
        }


    }
}
