import { ObbeyButtonModule } from './../../shared/components/button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompanyComponent } from './about-company.component';

@NgModule({
    declarations: [
        AboutCompanyComponent,
    ],
    imports: [
        CommonModule,
        ObbeyButtonModule,
    ],
    exports: [
        AboutCompanyComponent,
    ]
})
export class AboutCompanyModule { }
