import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertTraficListComponent } from './alert-trafic-list.component';

describe('AlertTraficListComponent', () => {
  let component: AlertTraficListComponent;
  let fixture: ComponentFixture<AlertTraficListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertTraficListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertTraficListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
