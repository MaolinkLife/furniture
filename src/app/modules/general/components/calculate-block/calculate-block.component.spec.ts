import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateBlockComponent } from './calculate-block.component';

describe('CalculateBlockComponent', () => {
  let component: CalculateBlockComponent;
  let fixture: ComponentFixture<CalculateBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
