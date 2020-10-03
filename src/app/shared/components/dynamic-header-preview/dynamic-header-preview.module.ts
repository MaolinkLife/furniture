import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicHeaderPreviewComponent } from './dynamic-header-preview.component';

@NgModule({
    declarations: [
        DynamicHeaderPreviewComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        DynamicHeaderPreviewComponent,
    ]
})
export class DynamicHeaderPreviewModule {

}
