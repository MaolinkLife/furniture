
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioOfWorksComponent } from './portfolio-of-works.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        PortfolioOfWorksComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    exports: [
        PortfolioOfWorksComponent,
    ]
})
export class PortfolioOfWorksModule { }
