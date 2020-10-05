import { BehaviorSubject } from 'rxjs';
import { NavigationsService } from './../../modules/navigations/navigations.service';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { SidebarMenuItem } from '../../interfaces/sidebar-menu-item';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'obbey-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
    styleUrls: ['./sidebar-menu.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuComponent implements OnInit {

    public readonly menuItems$: BehaviorSubject<SidebarMenuItem[]>;

    @Output()
    itemClick: EventEmitter<SidebarMenuItem> = new EventEmitter();

    constructor(
        private router: Router,
        private navigationsService: NavigationsService,
    ) {
        this.menuItems$ = this.navigationsService.sidebarMenuItems$;
    }

    ngOnInit(): void {
    }

    /**
     * Отвечает за переходы или раскрытие дочернего списка
     * @param menuItems - все элементы меню
     * @param item - текущий элемент меню, по которому происходит проверка, необходимо или перейти или раскрыть список
     */
    menuItemClick(menuItems: SidebarMenuItem[], item: SidebarMenuItem) {
        menuItems.forEach((link: SidebarMenuItem) => link.active = false);
        item.active = true;

        if (!item.children) {
            this.router.navigateByUrl(item.routerPath);
        } else {
            item.children.forEach((link: SidebarMenuItem) => link.active = false);
            item.children[0].active = true;
            this.router.navigateByUrl(item.children[0].routerPath);
        }
    }

}
