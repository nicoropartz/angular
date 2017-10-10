import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraficMapComponent } from './trafic-map.component';

describe('TraficMapComponent', () => {
  let component: TraficMapComponent;
  let fixture: ComponentFixture<TraficMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraficMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraficMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
