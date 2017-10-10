import { TestBed, inject } from '@angular/core/testing';

import { AlertTraficService } from './alert-trafic.service';

describe('AlertTraficService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertTraficService]
    });
  });

  it('should be created', inject([AlertTraficService], (service: AlertTraficService) => {
    expect(service).toBeTruthy();
  }));
});
