import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneControlComponent } from './ligne-control.component';

describe('LigneControlComponent', () => {
  let component: LigneControlComponent;
  let fixture: ComponentFixture<LigneControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
