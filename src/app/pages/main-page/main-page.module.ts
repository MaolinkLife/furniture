import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { FabricCatalogPageComponent } from '../fabric-catalog-page/fabric-catalog-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        MainPageComponent,
        FabricCatalogPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MainPageRoutingModule,
    ],
})
export class MainPageModule { }
