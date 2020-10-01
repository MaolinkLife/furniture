import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusBlockComponent } from './bonus-block.component';

describe('BonusBlockComponent', () => {
    let component: BonusBlockComponent;
    let fixture: ComponentFixture<BonusBlockComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BonusBlockComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BonusBlockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
