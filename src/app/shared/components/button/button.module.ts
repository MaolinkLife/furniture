import { IconsModule } from './../icons/icons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObbeyButtonComponent } from './button.component';


@NgModule({
    declarations: [
        ObbeyButtonComponent
    ],
    imports: [
        CommonModule,
        IconsModule,
    ],
    exports: [
        ObbeyButtonComponent,
    ]
})
export class ObbeyButtonModule { }
