import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionBlockComponent } from './production-block.component';

describe('ProductionBlockComponent', () => {
  let component: ProductionBlockComponent;
  let fixture: ComponentFixture<ProductionBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
