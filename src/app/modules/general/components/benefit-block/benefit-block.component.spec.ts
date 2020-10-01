import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitBlockComponent } from './benefit-block.component';

describe('BenefitBlockComponent', () => {
    let component: BenefitBlockComponent;
    let fixture: ComponentFixture<BenefitBlockComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BenefitBlockComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BenefitBlockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
