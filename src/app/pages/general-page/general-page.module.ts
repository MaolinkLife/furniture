import { BlocksModule } from 'src/app/modules/blocks/blocks.module';
import { IconsModule } from './../../shared/components/icons/icons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralPageComponent } from './general-page.component';
import { GeneralContentModule } from 'src/app/modules/general/general-content.module';
import { GeneralPageRoutingModule } from './general-page-routing.module';


@NgModule({
    declarations: [GeneralPageComponent],
    imports: [
        CommonModule,
        GeneralContentModule,
        IconsModule,
        BlocksModule,
        GeneralPageRoutingModule,
    ],
})
export class GeneralPageModule { }
