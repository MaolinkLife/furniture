import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObbeyFlipCardComponent } from './flip-card.component';



@NgModule({
    declarations: [
        ObbeyFlipCardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ObbeyFlipCardComponent,
    ],
})
export class ObbeyFlipCardModule { }
