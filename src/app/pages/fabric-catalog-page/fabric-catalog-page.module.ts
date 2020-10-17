import { MessagersModule } from './../../shared/components/messagers/messagers.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ObbeyButtonModule } from './../../shared/components/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObbeyInputModule } from './../../shared/components/input/input.module';
import { IconsModule } from './../../shared/components/icons/icons.module';
import { ObbeyFormModule } from './../../shared/components/form/from.module';
import { FabricCatalogPageComponent } from './fabric-catalog-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricCatalogPageRoutingModule } from './fabric-catalog-page-routing.module';


@NgModule({
    declarations: [
        FabricCatalogPageComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FabricCatalogPageRoutingModule,
        SharedModule,
        MessagersModule,
    ],
    exports: [
        FabricCatalogPageComponent,
    ]
})
export class FabricCatalogPageModule { }
