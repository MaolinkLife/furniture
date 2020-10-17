import { IconsModule } from './../icons/icons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagersComponent } from './messagers.component';



@NgModule({
    declarations: [MessagersComponent],
    imports: [
        CommonModule,
        IconsModule,
    ],
    exports: [
        MessagersComponent,
    ]
})
export class MessagersModule { }
