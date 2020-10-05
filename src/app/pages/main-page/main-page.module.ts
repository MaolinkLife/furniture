import { FabricCatalogModule } from './../../modules/fabric-catalog/fabric-catalog.module';
import { BarsModule } from './../../modules/bars/bars.module';
import { ROUTES } from './../../shared/routes/routes';
import { NavigationsModule } from './../../shared/modules/navigations/navigations.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FurnitureCareModule } from 'src/app/modules/furniture-care/furniture-care.module';
import { ShippingAndPaymentModule } from 'src/app/modules/shipping-and-payment/shipping-and-payment.module';
import { AboutCompanyModule } from 'src/app/modules/about-company/about-company.module';

@NgModule({
    declarations: [
        MainPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        NavigationsModule.forRoot(ROUTES),
        BarsModule,
        FabricCatalogModule,
        FurnitureCareModule,
        ShippingAndPaymentModule,
        AboutCompanyModule,
    ],
})
export class MainPageModule { }
