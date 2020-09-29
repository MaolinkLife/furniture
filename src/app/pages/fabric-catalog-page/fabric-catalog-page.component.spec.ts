import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricCatalogPageComponent } from './fabric-catalog-page.component';

describe('FabricCatalogPageComponent', () => {
  let component: FabricCatalogPageComponent;
  let fixture: ComponentFixture<FabricCatalogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricCatalogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricCatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
