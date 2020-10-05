import { IconsModule } from './../../shared/components/icons/icons.module';
import { ShieldItemModule } from './../../shared/components/shield-item/shield-item.module';
import { ObbeyButtonModule } from './../../shared/components/button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CornerSofasComponent } from './components/corner-sofas/corner-sofas.component';
import { StraightSofasComponent } from './components/straight-sofas/straight-sofas.component';
import { ArmchairsComponent } from './components/armchairs/armchairs.component';
import { ChairsComponent } from './components/chairs/chairs.component';
import { HeadboardsComponent } from './components/headboards/headboards.component';
import { PoufsAndBanquetsComponent } from './components/poufs-and-banquets/poufs-and-banquets.component';

@NgModule({
    declarations: [

        StraightSofasComponent,
        CornerSofasComponent,
        ArmchairsComponent,
        ChairsComponent,
        HeadboardsComponent,
        PoufsAndBanquetsComponent
    ],
    imports: [
        CommonModule,
        ObbeyButtonModule,
        ShieldItemModule,
        IconsModule,
    ]
})
export class PaddingFurnitureModule { }
