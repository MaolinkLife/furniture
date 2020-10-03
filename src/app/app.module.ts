import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FurnitureCarePageComponent } from './pages/furniture-care-page/furniture-care-page.component';

@NgModule({
    declarations: [
        AppComponent,
        FurnitureCarePageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule { }
