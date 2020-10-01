import { IconsModule } from './../../shared/components/icons/icons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralPreviewComponentComponent } from './components/general-preview-component/general-preview-component.component';
import { CalculateBlockComponent } from './components/calculate-block/calculate-block.component';
import { DesignerOrderBlockComponent } from './components/designer-order-block/designer-order-block.component';
import { ProgressWorkBlockComponent } from './components/progress-work-block/progress-work-block.component';
import { ResponsibilityBlockComponent } from './components/responsibility-block/responsibility-block.component';
import { ProductionBlockComponent } from './components/production-block/production-block.component';
import { ExamplesBlockComponent } from './components/examples-block/examples-block.component';
import { SocialBlockComponent } from './components/social-block/social-block.component';
import { QualityBlockComponent } from './components/quality-block/quality-block.component';
import { RecomendedBlockComponent } from './components/recomended-block/recomended-block.component';
import { HaulingFurnitureBlockComponent } from './components/hauling-furniture-block/hauling-furniture-block.component';
import { BenefitBlockComponent } from './components/benefit-block/benefit-block.component';
import { BonusBlockComponent } from './components/bonus-block/bonus-block.component';
import { MapBlockComponent } from './components/map-block/map-block.component';
import { CompanyLogoModule } from 'src/app/shared/components/company-logo/company-logo.module';

@NgModule({
    declarations: [
        GeneralPreviewComponentComponent,
        CalculateBlockComponent,
        DesignerOrderBlockComponent,
        ProgressWorkBlockComponent,
        ResponsibilityBlockComponent,
        ProductionBlockComponent,
        ExamplesBlockComponent,
        SocialBlockComponent,
        QualityBlockComponent,
        RecomendedBlockComponent,
        HaulingFurnitureBlockComponent,
        BenefitBlockComponent,
        BonusBlockComponent,
        MapBlockComponent,
    ],
    imports: [
        CommonModule,
        IconsModule,
        CompanyLogoModule,
    ],
    exports: [
        GeneralPreviewComponentComponent,
        CalculateBlockComponent,
        DesignerOrderBlockComponent,
        ProgressWorkBlockComponent,
        ResponsibilityBlockComponent,
        ProductionBlockComponent,
        ExamplesBlockComponent,
        SocialBlockComponent,
        QualityBlockComponent,
        RecomendedBlockComponent,
        HaulingFurnitureBlockComponent,
        BenefitBlockComponent,
        BonusBlockComponent,
        MapBlockComponent,
    ],
})
export class GeneralContentModule { }
