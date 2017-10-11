import { TestBed, inject } from '@angular/core/testing';

import { LignecontrolServiceService } from './lignecontrol-service.service';

describe('LignecontrolServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LignecontrolServiceService]
    });
  });

  it('should be created', inject([LignecontrolServiceService], (service: LignecontrolServiceService) => {
    expect(service).toBeTruthy();
  }));
});
