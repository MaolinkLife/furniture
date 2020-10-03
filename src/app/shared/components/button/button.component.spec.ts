import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObbeyButtonComponent } from './button.component';

describe('ButtonComponent', () => {
    let component: ObbeyButtonComponent;
    let fixture: ComponentFixture<ObbeyButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ObbeyButtonComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ObbeyButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
