import { IconsModule } from './../../shared/components/icons/icons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralPageRoutingModule } from './general-page-routing.module';
import { GeneralPageComponent } from './general-page.component';
import { GeneralContentModule } from 'src/app/modules/general/general-content.module';


@NgModule({
    declarations: [GeneralPageComponent],
    imports: [
        CommonModule,
        GeneralPageRoutingModule,
        GeneralContentModule,
        IconsModule,
    ],
})
export class GeneralPageModule { }
