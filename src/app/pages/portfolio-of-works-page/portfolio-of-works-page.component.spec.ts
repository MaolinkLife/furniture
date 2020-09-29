import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioOfWorksPageComponent } from './portfolio-of-works-page.component';

describe('PortfolioOfWorksPageComponent', () => {
  let component: PortfolioOfWorksPageComponent;
  let fixture: ComponentFixture<PortfolioOfWorksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioOfWorksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioOfWorksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
