import { ObbeyButtonModule } from './../../shared/components/button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarsComponent } from './bars.component';



@NgModule({
    declarations: [
        BarsComponent
    ],
    imports: [
        CommonModule,
        ObbeyButtonModule,
    ],
    exports: [
        BarsComponent,
    ]
})
export class BarsModule { }
