import { NavigationsService } from './navigations.service';
import { RouterModule } from '@angular/router';
import { PreviewRouteInterface } from './../../interfaces/preview-route.interface';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ROUTES_INJECTION_TOKEN } from '../../tokens/preview-route';



@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        NavigationsService,
    ],
    exports: [
        RouterModule,
    ]
})
export class NavigationsModule {
    public static forRoot(routes: PreviewRouteInterface[]): ModuleWithProviders[] {
        return [
            RouterModule.forChild([
                ...routes,
                {
                    path: '**',
                    component: PageNotFoundComponent,
                },
            ]),
            {
                ngModule: NavigationsModule,
                providers: [
                    {
                        provide: ROUTES_INJECTION_TOKEN,
                        useValue: routes,
                    },
                ],
            }
        ];
    }
}
