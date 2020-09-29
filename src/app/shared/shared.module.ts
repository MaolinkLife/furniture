import { HeaderModule } from './components/header/header.module';
import { CompanyLogoModule } from './components/company-logo/company-logo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const MODULES = [
    CompanyLogoModule,
    HeaderModule,
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MODULES,
    ],
    exports: [
        MODULES,
    ]
})
export class SharedModule { }
