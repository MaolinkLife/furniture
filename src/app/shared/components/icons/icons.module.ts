import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsComponent } from './icons.component';
import { ObbeyFurnitureIconsComponent } from './obbey-furniture-icons/obbey-furniture-icons.component';

@NgModule({
    declarations: [
        IconsComponent,
        ObbeyFurnitureIconsComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        IconsComponent,
    ]
})
export class IconsModule { }
