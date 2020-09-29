import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyLogoComponent } from './company-logo.component';

@NgModule({
    declarations: [
        CompanyLogoComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CompanyLogoComponent,
    ]
})
export class CompanyLogoModule { }
