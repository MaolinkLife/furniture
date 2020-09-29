import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityBlockComponent } from './responsibility-block.component';

describe('ResponsibilityBlockComponent', () => {
  let component: ResponsibilityBlockComponent;
  let fixture: ComponentFixture<ResponsibilityBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsibilityBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibilityBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
