import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricCatalogComponent } from './fabric-catalog.component';

@NgModule({
    declarations: [FabricCatalogComponent],
    imports: [
        CommonModule
    ],
    exports: [FabricCatalogComponent]
})
export class FabricCatalogModule { }
