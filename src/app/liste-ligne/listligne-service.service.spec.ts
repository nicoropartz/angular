import { TestBed, inject } from '@angular/core/testing';

import { ListligneServiceService } from './listligne-service.service';

describe('ListligneServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListligneServiceService]
    });
  });

  it('should be created', inject([ListligneServiceService], (service: ListligneServiceService) => {
    expect(service).toBeTruthy();
  }));
});
