import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObbeyInputComponent } from './input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ObbeyInputComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        ObbeyInputComponent,
    ]
})
export class ObbeyInputModule { }
