import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoufsAndBanquetsComponent } from './poufs-and-banquets.component';

describe('PoufsAndBanquetsComponent', () => {
  let component: PoufsAndBanquetsComponent;
  let fixture: ComponentFixture<PoufsAndBanquetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoufsAndBanquetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoufsAndBanquetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
