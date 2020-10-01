import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedBlockComponent } from './recomended-block.component';

describe('RecomendedBlockComponent', () => {
  let component: RecomendedBlockComponent;
  let fixture: ComponentFixture<RecomendedBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendedBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendedBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
