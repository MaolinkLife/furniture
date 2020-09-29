import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureCarePageComponent } from './furniture-care-page.component';

describe('FurnitureCarePageComponent', () => {
    let component: FurnitureCarePageComponent;
    let fixture: ComponentFixture<FurnitureCarePageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FurnitureCarePageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FurnitureCarePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
