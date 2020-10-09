import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricCatalogComponent } from './fabric-catalog.component';

@NgModule({
    declarations: [
        FabricCatalogComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    exports: [
        FabricCatalogComponent,
    ]
})
export class FabricCatalogModule { }
