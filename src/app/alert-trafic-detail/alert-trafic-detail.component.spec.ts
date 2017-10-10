import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertTraficDetailComponent } from './alert-trafic-detail.component';

describe('AlertTraficDetailComponent', () => {
  let component: AlertTraficDetailComponent;
  let fixture: ComponentFixture<AlertTraficDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertTraficDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertTraficDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
