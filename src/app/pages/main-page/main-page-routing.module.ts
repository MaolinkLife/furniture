import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../general-page/general-page.module').then(m => m.GeneralPageModule),
            }
        ],
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainPageRoutingModule { }
