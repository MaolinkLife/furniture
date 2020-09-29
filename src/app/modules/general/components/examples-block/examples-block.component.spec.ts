import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesBlockComponent } from './examples-block.component';

describe('ExamplesBlockComponent', () => {
  let component: ExamplesBlockComponent;
  let fixture: ComponentFixture<ExamplesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
