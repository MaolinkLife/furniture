import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeatherArmchairComponent } from './components/leather-armchair/leather-armchair.component';
import { ShieldItemModule } from 'src/app/shared/components/shield-item/shield-item.module';
import { ObbeyButtonModule } from 'src/app/shared/components/button/button.module';
import { IconsModule } from 'src/app/shared/components/icons/icons.module';
import { LeatherCornerSofasComponent } from './components/leather-corner-sofas/leather-corner-sofas.component';
import { LeahterChairsComponent } from './components/leahter-chairs/leahter-chairs.component';
import { LeatherStraightSofasComponent } from './components/leather-straight-sofas/leather-straight-sofas.component';
import { LeatherPoufsAndBanquetsComponent } from './components/leather-poufs-and-banquets/leather-poufs-and-banquets.component';


@NgModule({
    declarations: [
        LeatherArmchairComponent,
        LeatherCornerSofasComponent,
        LeahterChairsComponent,
        LeatherStraightSofasComponent,
        LeatherPoufsAndBanquetsComponent,
    ],
    imports: [
        CommonModule,
        ObbeyButtonModule,
        ShieldItemModule,
        IconsModule,
    ],
    exports: [
        LeatherArmchairComponent,
        LeatherCornerSofasComponent,
        LeahterChairsComponent,
        LeatherStraightSofasComponent,
    ]
})
export class LeaherFurnitureModule { }
