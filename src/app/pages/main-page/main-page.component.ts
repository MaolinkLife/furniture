import { GeneralPreviewComponentComponent } from './../../modules/general/components/general-preview-component/general-preview-component.component';
import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, Router, RouterEvent } from '@angular/router';

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

    isHomePage = true;

    component = GeneralPreviewComponentComponent;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.router.events.subscribe((event: RouterEvent) => {
            if ([NavigationEnd, NavigationCancel, NavigationError]
                .some((routerEvent) => event instanceof routerEvent)) {

                console.log(this.activatedRoute.snapshot);
            }
        });
    }

    ngOnChanges(): void {

    }

    toggleActive(index: number, array: { name: string; active: boolean }[]) {
        array.forEach(el => el.active = false);
        array[index].active = true;
    }
}
