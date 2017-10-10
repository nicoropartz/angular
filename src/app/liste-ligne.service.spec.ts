import { TestBed, inject } from '@angular/core/testing';

import { ListeLigneService } from './liste-ligne.service';

describe('ListeLigneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListeLigneService]
    });
  });

  it('should be created', inject([ListeLigneService], (service: ListeLigneService) => {
    expect(service).toBeTruthy();
  }));
});
