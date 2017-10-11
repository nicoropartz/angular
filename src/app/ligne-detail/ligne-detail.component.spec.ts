import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneDetailComponent } from './ligne-detail.component';

describe('LigneDetailComponent', () => {
  let component: LigneDetailComponent;
  let fixture: ComponentFixture<LigneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
