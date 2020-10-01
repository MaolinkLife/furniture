import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityBlockComponent } from './quality-block.component';

describe('QualityBlockComponent', () => {
  let component: QualityBlockComponent;
  let fixture: ComponentFixture<QualityBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
