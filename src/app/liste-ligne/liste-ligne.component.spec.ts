import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLigneComponent } from './liste-ligne.component';

describe('ListeLigneComponent', () => {
  let component: ListeLigneComponent;
  let fixture: ComponentFixture<ListeLigneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeLigneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
