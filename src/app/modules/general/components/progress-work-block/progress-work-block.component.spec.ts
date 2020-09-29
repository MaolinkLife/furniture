import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressWorkBlockComponent } from './progress-work-block.component';

describe('ProgressWorkBlockComponent', () => {
  let component: ProgressWorkBlockComponent;
  let fixture: ComponentFixture<ProgressWorkBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressWorkBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressWorkBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
