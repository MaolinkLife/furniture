import { IconsModule } from './../icons/icons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { ItemConnectorDirective } from './item-connector.directive';

@NgModule({
    declarations: [
        CarouselComponent,
        ItemConnectorDirective,
    ],
    imports: [
        CommonModule,
        IconsModule,
    ],
    exports: [
        CarouselComponent,
        ItemConnectorDirective,
    ],
})
export class CarouselModule { }
