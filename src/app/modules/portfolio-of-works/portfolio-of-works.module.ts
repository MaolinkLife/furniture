import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioOfWorksComponent } from './portfolio-of-works.component';



@NgModule({
    declarations: [PortfolioOfWorksComponent],
    imports: [
        CommonModule
    ],
    exports: [PortfolioOfWorksComponent]
})
export class PortfolioOfWorksModule { }
