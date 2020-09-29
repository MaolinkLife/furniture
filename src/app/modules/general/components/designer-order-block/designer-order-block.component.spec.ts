import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerOrderBlockComponent } from './designer-order-block.component';

describe('DesignerOrderBlockComponent', () => {
  let component: DesignerOrderBlockComponent;
  let fixture: ComponentFixture<DesignerOrderBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerOrderBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerOrderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
