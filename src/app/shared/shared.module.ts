import { IconsModule } from './components/icons/icons.module';
import { CarouselModule } from './components/carousel/carousel.module';
import { ObbeyInputModule } from './components/input/input.module';
import { ObbeyFormModule } from './components/form/from.module';
import { ObbeyFlipCardModule } from './components/flip-card/flip-card.module';
import { ObbeyButtonModule } from './components/button/button.module';
import { HeaderModule } from './components/header/header.module';
import { CompanyLogoModule } from './components/company-logo/company-logo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupModule } from './components/popup/popup.module';

const MODULES = [
    CompanyLogoModule,
    ObbeyButtonModule,
    ObbeyFlipCardModule,
    ObbeyFormModule,
    ObbeyInputModule,
    CarouselModule,
    IconsModule,
    HeaderModule,
    PopupModule,
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MODULES,
    ],
    exports: [
        MODULES,

    ]
})
export class SharedModule { }
