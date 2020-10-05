import { FurnitureCarePageRoutingModule } from './furniture-care-page-routing.module';
import { BlocksModule } from 'src/app/modules/blocks/blocks.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnitureCarePageComponent } from './furniture-care-page.component';

@NgModule({
    declarations: [
        FurnitureCarePageComponent
    ],
    imports: [
        CommonModule,
        BlocksModule,
        FurnitureCarePageRoutingModule,
    ],
    exports: [
        FurnitureCarePageComponent,
    ]
})
export class FurnitureCarePageModule { }
