import { IconsModule } from './../icons/icons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShieldItemComponent } from './shield-item.component';

@NgModule({
    declarations: [
        ShieldItemComponent
    ],
    imports: [
        CommonModule,
        IconsModule,
    ],
    exports: [
        ShieldItemComponent,
    ]
})
export class ShieldItemModule { }
