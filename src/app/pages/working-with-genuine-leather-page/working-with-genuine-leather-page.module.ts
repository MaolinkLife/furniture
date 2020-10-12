import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingWithGenuineLeatherPageComponent } from './working-with-genuine-leather-page.component';
import { LeaherFurnitureModule } from 'src/app/modules/leaher-furniture/leaher-furniture.module';

@NgModule({
    declarations: [
        WorkingWithGenuineLeatherPageComponent,
    ],
    imports: [
        CommonModule,
        LeaherFurnitureModule,
    ],
    exports: [
        WorkingWithGenuineLeatherPageComponent,
    ]
})
export class WorkingWithGenuineLeatherPageModule { }
