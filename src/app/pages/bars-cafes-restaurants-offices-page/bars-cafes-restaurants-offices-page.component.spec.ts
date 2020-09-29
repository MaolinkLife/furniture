import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsCafesRestaurantsOfficesPageComponent } from './bars-cafes-restaurants-offices-page.component';

describe('BarsCafesRestaurantsOfficesPageComponent', () => {
  let component: BarsCafesRestaurantsOfficesPageComponent;
  let fixture: ComponentFixture<BarsCafesRestaurantsOfficesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarsCafesRestaurantsOfficesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsCafesRestaurantsOfficesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
