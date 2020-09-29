import { GeneralContentModule } from './../../../modules/general/general-content.module';
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
    ],
    exports: [
        HeaderComponent,
    ],
})
export class HeaderModule { }
