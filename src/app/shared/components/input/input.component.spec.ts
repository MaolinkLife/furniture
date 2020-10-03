import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObbeyInputComponent } from './input.component';

describe('InputComponent', () => {
    let component: ObbeyInputComponent;
    let fixture: ComponentFixture<ObbeyInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ObbeyInputComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ObbeyInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
