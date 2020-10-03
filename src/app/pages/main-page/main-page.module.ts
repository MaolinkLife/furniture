import { ROUTES } from './../../shared/routes/routes';
import { NavigationsModule } from './../../shared/modules/navigations/navigations.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        MainPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        NavigationsModule.forRoot(ROUTES),
    ],
})
export class MainPageModule { }
