import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObbeyFormComponent } from './form.component';

@NgModule({
    declarations: [
        ObbeyFormComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ObbeyFormComponent,
    ]
})
export class ObbeyFormModule { }
