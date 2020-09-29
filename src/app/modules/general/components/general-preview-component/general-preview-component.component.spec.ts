import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPreviewComponentComponent } from './general-preview-component.component';

describe('GeneralPreviewComponentComponent', () => {
    let component: GeneralPreviewComponentComponent;
    let fixture: ComponentFixture<GeneralPreviewComponentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GeneralPreviewComponentComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GeneralPreviewComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
