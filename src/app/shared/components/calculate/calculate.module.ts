import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from './../select/select.module';
import { IconsModule } from './../icons/icons.module';
import { ObbeyButtonModule } from './../button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateComponent } from './calculate.component';

@NgModule({
    declarations: [
        CalculateComponent
    ],
    imports: [
        CommonModule,
        ObbeyButtonModule,
        IconsModule,
        SelectModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        CalculateComponent,
    ]
})
export class CalculateModule { }
