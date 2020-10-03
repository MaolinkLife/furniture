import { BlocksModule } from './../../modules/blocks/blocks.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaddingFurniturePageComponent } from './padding-furniture-page.component';
import { PaddingFurnitureModule } from 'src/app/modules/padding-furniture/padding-furniture.module';

@NgModule({
    declarations: [
        PaddingFurniturePageComponent
    ],
    imports: [
        CommonModule,
        PaddingFurnitureModule,
        BlocksModule,
    ]
})
export class PaddingFurniturePageModule { }
