import { MessagersModule } from './../../shared/components/messagers/messagers.module';
import { CarouselModule } from './../../shared/components/carousel/carousel.module';
import { BlocksModule } from './../blocks/blocks.module';
import { ObbeyButtonModule } from './../../shared/components/button/button.module';
import { IconsModule } from './../../shared/components/icons/icons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralPreviewComponentComponent } from './components/general-preview-component/general-preview-component.component';

import { DesignerOrderBlockComponent } from './components/designer-order-block/designer-order-block.component';
import { ProgressWorkBlockComponent } from './components/progress-work-block/progress-work-block.component';
import { ExamplesBlockComponent } from './components/examples-block/examples-block.component';
import { SocialBlockComponent } from './components/social-block/social-block.component';
import { QualityBlockComponent } from './components/quality-block/quality-block.component';
import { RecomendedBlockComponent } from './components/recomended-block/recomended-block.component';
import { BenefitBlockComponent } from './components/benefit-block/benefit-block.component';
import { CompanyLogoModule } from 'src/app/shared/components/company-logo/company-logo.module';
import { ObbeyFormModule } from 'src/app/shared/components/form/from.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObbeyInputModule } from 'src/app/shared/components/input/input.module';
import { ShieldItemModule } from 'src/app/shared/components/shield-item/shield-item.module';
import { ObbeyFlipCardModule } from 'src/app/shared/components/flip-card/flip-card.module';
import { PopupModule } from 'src/app/shared/components/popup/popup.module';

@NgModule({
    declarations: [
        GeneralPreviewComponentComponent,
        DesignerOrderBlockComponent,
        ProgressWorkBlockComponent,
        ExamplesBlockComponent,
        SocialBlockComponent,
        QualityBlockComponent,
        RecomendedBlockComponent,
        BenefitBlockComponent,
    ],
    imports: [
        CommonModule,
        IconsModule,
        CompanyLogoModule,
        ObbeyButtonModule,
        ObbeyFormModule,
        ReactiveFormsModule,
        FormsModule,
        ObbeyInputModule,
        ShieldItemModule,
        ObbeyFlipCardModule,
        BlocksModule,
        CarouselModule,
        PopupModule,
        MessagersModule,
    ],
    exports: [
        GeneralPreviewComponentComponent,
        DesignerOrderBlockComponent,
        ProgressWorkBlockComponent,
        ExamplesBlockComponent,
        SocialBlockComponent,
        QualityBlockComponent,
        RecomendedBlockComponent,
        BenefitBlockComponent,
    ],
})
export class GeneralContentModule { }
