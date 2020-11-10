import { DynamicHeaderPreviewModule } from './../dynamic-header-preview/dynamic-header-preview.module';
/*
 * angular default modules
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/*
 * module default components
*/
import { HeaderComponent } from './header.component';
/*
 * injectable custom modules
*/
import { CompanyLogoModule } from '../company-logo/company-logo.module';
import { IconsModule } from './../icons/icons.module';
import { SidebarMenuModule } from './../sidebar-menu/sidebar-menu.module';
import { GeneralContentModule } from './../../../modules/general/general-content.module';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { WebHeaderComponent } from './web-header/web-header.component';
import { DropdownModule } from '../dropdown/dropdown.module';
import { ShieldItemModule } from '../shield-item/shield-item.module';

@NgModule({
    declarations: [
        HeaderComponent,
        MobileHeaderComponent,
        WebHeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        CompanyLogoModule,
        IconsModule,
        GeneralContentModule,
        SidebarMenuModule,
        DynamicHeaderPreviewModule,
        DropdownModule,
        ShieldItemModule,
    ],
    exports: [
        HeaderComponent,
        MobileHeaderComponent,
        WebHeaderComponent,
    ],
})
export class HeaderModule { }
