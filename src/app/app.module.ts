import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PaddingOfUpholsteredFurniturePageComponent } from './pages/padding-of-upholstered-furniture-page/padding-of-upholstered-furniture-page.component';
import { WorkingWithGenuineLeatherPageComponent } from './pages/working-with-genuine-leather-page/working-with-genuine-leather-page.component';
import { PortfolioOfWorksPageComponent } from './pages/portfolio-of-works-page/portfolio-of-works-page.component';
import { BarsCafesRestaurantsOfficesPageComponent } from './pages/bars-cafes-restaurants-offices-page/bars-cafes-restaurants-offices-page.component';
import { ShippingAndPaymentPageComponent } from './pages/shipping-and-payment-page/shipping-and-payment-page.component';
import { AboutCompanyPageComponent } from './pages/about-company-page/about-company-page.component';
import { FurnitureCarePageComponent } from './pages/furniture-care-page/furniture-care-page.component';
import { QuestionAnswerPageComponent } from './pages/question-answer-page/question-answer-page.component';

@NgModule({
    declarations: [
        AppComponent,
        PaddingOfUpholsteredFurniturePageComponent,
        WorkingWithGenuineLeatherPageComponent,
        PortfolioOfWorksPageComponent,
        BarsCafesRestaurantsOfficesPageComponent,
        ShippingAndPaymentPageComponent,
        AboutCompanyPageComponent,
        FurnitureCarePageComponent,
        QuestionAnswerPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
