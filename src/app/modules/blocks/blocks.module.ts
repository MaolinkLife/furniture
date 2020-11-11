import { MessagersModule } from './../../shared/components/messagers/messagers.module';
import { CarouselModule } from './../../shared/components/carousel/carousel.module';
import { ObbeyFormModule } from './../../shared/components/form/from.module';

import { ObbeyFlipCardModule } from './../../shared/components/flip-card/flip-card.module';
import { IconsModule } from './../../shared/components/icons/icons.module';
import { ObbeyButtonModule } from './../../shared/components/button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ExamplesRefurbishedFurnitureComponent
} from './components/examples-refurbished-furniture/examples-refurbished-furniture.component';
import { CalculateBlockComponent } from './components/calculate-block/calculate-block.component';
import { ProgressWorkComponent } from './components/progress-work/progress-work.component';
import { HaulingFurnitureBlockComponent } from './components/hauling-furniture-block/hauling-furniture-block.component';
import { DesignerOrderComponent } from './components/designer-order/designer-order.component';
import { MapBlockComponent } from './components/map-block/map-block.component';
import { BonusBlockComponent } from './components/bonus-block/bonus-block.component';
import { ProductionBlockComponent } from './components/production-block/production-block.component';
import { CompanyLogoModule } from 'src/app/shared/components/company-logo/company-logo.module';
import { ResponsibilityBlockComponent } from './components/responsibility-block/responsibility-block.component';
import { ShieldItemModule } from 'src/app/shared/components/shield-item/shield-item.module';
import { FurnitureProtectionComponent } from './components/furniture-protection/furniture-protection.component';
import { CalculateModule } from 'src/app/shared/components/calculate/calculate.module';
import { QualityBlockComponent } from './components/quality-block/quality-block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObbeyInputModule } from 'src/app/shared/components/input/input.module';

@NgModule({
    declarations: [
        ExamplesRefurbishedFurnitureComponent,
        CalculateBlockComponent,
        ProgressWorkComponent,
        HaulingFurnitureBlockComponent,
        DesignerOrderComponent,
        MapBlockComponent,
        BonusBlockComponent,
        ProductionBlockComponent,
        ResponsibilityBlockComponent,
        FurnitureProtectionComponent,
        QualityBlockComponent,
    ],
    imports: [
        CommonModule,
        ObbeyButtonModule,
        IconsModule,
        ObbeyFlipCardModule,
        ObbeyFormModule,
        ObbeyInputModule,
        CompanyLogoModule,
        ShieldItemModule,
        CalculateModule,
        CarouselModule,
        MessagersModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        ExamplesRefurbishedFurnitureComponent,
        CalculateBlockComponent,
        ProgressWorkComponent,
        HaulingFurnitureBlockComponent,
        DesignerOrderComponent,
        MapBlockComponent,
        BonusBlockComponent,
        ProductionBlockComponent,
        ResponsibilityBlockComponent,
        FurnitureProtectionComponent,
        QualityBlockComponent,
    ]
})
export class BlocksModule { }
