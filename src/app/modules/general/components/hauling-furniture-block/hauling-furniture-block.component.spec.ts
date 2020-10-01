import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaulingFurnitureBlockComponent } from './hauling-furniture-block.component';

describe('HaulingFurnitureBlockComponent', () => {
    let component: HaulingFurnitureBlockComponent;
    let fixture: ComponentFixture<HaulingFurnitureBlockComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HaulingFurnitureBlockComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HaulingFurnitureBlockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
