import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddingOfUpholsteredFurniturePageComponent } from './padding-of-upholstered-furniture-page.component';

describe('PaddingOfUpholsteredFurniturePageComponent', () => {
    let component: PaddingOfUpholsteredFurniturePageComponent;
    let fixture: ComponentFixture<PaddingOfUpholsteredFurniturePageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PaddingOfUpholsteredFurniturePageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaddingOfUpholsteredFurniturePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
