import { MessagersModule } from './../../shared/components/messagers/messagers.module';
import { IconsModule } from './../../shared/components/icons/icons.module';
import { ObbeyButtonModule } from './../../shared/components/button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnitureCareComponent } from './furniture-care.component';

@NgModule({
    declarations: [
        FurnitureCareComponent,
    ],
    imports: [
        CommonModule,
        ObbeyButtonModule,
        IconsModule,
        MessagersModule,
    ],
    exports: [
        FurnitureCareComponent,
    ]
})
export class FurnitureCareModule { }
