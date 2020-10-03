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

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        CompanyLogoModule,
        IconsModule,
        GeneralContentModule,
        SidebarMenuModule,
        DynamicHeaderPreviewModule,
    ],
    exports: [
        HeaderComponent,
    ],
})
export class HeaderModule { }
