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

@NgModule({
    declarations: [
        GeneralPreviewComponentComponent,
        CalculateBlockComponent,
        DesignerOrderBlockComponent,
        ProgressWorkBlockComponent,
        ResponsibilityBlockComponent,
        ProductionBlockComponent,
        ExamplesBlockComponent,
    ],
    imports: [
        CommonModule,
        IconsModule,
    ],
    exports: [
        GeneralPreviewComponentComponent,
        CalculateBlockComponent,
        DesignerOrderBlockComponent,
        ProgressWorkBlockComponent,
        ResponsibilityBlockComponent,
        ProductionBlockComponent,
        ExamplesBlockComponent,
    ],
})
export class GeneralContentModule { }
