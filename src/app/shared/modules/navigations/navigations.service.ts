import { PreviewComponentInterface } from './../../interfaces/preview-component.interface';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Injectable, Inject, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTES_INJECTION_TOKEN } from '../../tokens/preview-route';
import { PreviewRouteInterface } from '../../interfaces/preview-route.interface';
import { MarkRouteInterface } from './interfaces/mark-route.interface';
import { SidebarMenuItem } from '../../interfaces/sidebar-menu-item';
import { PreviewComponentClass } from '../../types/preview-component-class.type';
import { GeneralPreviewComponentComponent } from 'src/app/modules/general/components/general-preview-component/general-preview-component.component';

@Injectable({
    providedIn: 'root'
})
export class NavigationsService {
    public readonly sidebarMenuItems$: BehaviorSubject<SidebarMenuItem[]> = new BehaviorSubject([]);

    // tslint:disable-next-line: max-line-length
    public dynamicComponentView$: BehaviorSubject<PreviewComponentClass<Component>> | any = new BehaviorSubject<PreviewComponentClass<Component>>(null);

    private markRoutes: MarkRouteInterface[];

    constructor(
        @Inject(Router) private router: Router,
        @Inject(ROUTES_INJECTION_TOKEN) private routes: PreviewRouteInterface[],
        private titleService: Title,
        private activatedRoute: ActivatedRoute,
    ) {
        this.putSubscriptions();
        this.updateRoutesData();
    }

    public getRouteByMark(mark: string): MarkRouteInterface {
        return this.markRoutes.find((markRoute: MarkRouteInterface) => markRoute.mark === mark) || null;
    }

    private putSubscriptions(): void {
        this.router.events.subscribe((event: RouterEvent) => {
            if ([NavigationEnd, NavigationCancel, NavigationError]
                .some((routerEvent) => event instanceof routerEvent)) {

                let routerTitle = '';
                let route: ActivatedRoute = this.activatedRoute;

                while (route && route.snapshot) {
                    if (route.snapshot.data) {
                        if (route.snapshot.data.title) {
                            routerTitle = route.snapshot.data.title;

                            this.dynamicComponentView$.next(route.snapshot.data.previewComponent);
                        }
                    }
                    route = route.children[0];
                }

                this.dynamicComponentView$.subscribe(component => {
                    if (!component) {
                        this.dynamicComponentView$.next(GeneralPreviewComponentComponent);
                    }
                });

                const title = `Obbey ${routerTitle}`;
                this.titleService.setTitle(title);
            }
        });
    }

    private updateRoutesData(): void {
        this.markRoutes = this.getMarkRoutes(this.routes);
        this.sidebarMenuItems$.next(this.getMenuItems(this.routes));
    }

    private getMarkRoutes(currentRoutes: PreviewRouteInterface[], patentLink: string = ''): MarkRouteInterface[] {
        let result: MarkRouteInterface[] = [];

        for (const currentRoute of currentRoutes) {
            const path = `${patentLink}/${currentRoute.path}`;

            if (currentRoute.data?.mark) {
                result.push({
                    mark: currentRoute.data.mark, path
                });
            }

            if (currentRoute.children) {
                result = result.concat(this.getMarkRoutes(currentRoute.children, path));
            }
        }

        return result;
    }

    private getMenuItems(currentRoutes: PreviewRouteInterface[], patentLink: string = ''): SidebarMenuItem[] {
        let result: SidebarMenuItem[] = [];

        for (const currentRoute of currentRoutes) {
            const path = `${patentLink}/${currentRoute.path}`;

            if (currentRoute.data?.title) {
                const sidebarItem: SidebarMenuItem = {
                    caption: currentRoute.data.title,
                    routerPath: path,
                    active: false,
                };

                if (currentRoute.children) {
                    sidebarItem.children = this.getMenuItems(currentRoute.children, path);
                }

                result.push(sidebarItem);

            } else if (currentRoute.children) {
                result = result.concat(this.getMenuItems(currentRoute.children, path));
            }
        }

        return result;
    }
}
