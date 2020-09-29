import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithGenuineLeatherPageComponent } from './working-with-genuine-leather-page.component';

describe('WorkingWithGenuineLeatherPageComponent', () => {
    let component: WorkingWithGenuineLeatherPageComponent;
    let fixture: ComponentFixture<WorkingWithGenuineLeatherPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WorkingWithGenuineLeatherPageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkingWithGenuineLeatherPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
