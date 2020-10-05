import { FurnitureCarePageComponent } from './furniture-care-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: FurnitureCarePageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FurnitureCarePageRoutingModule { }
