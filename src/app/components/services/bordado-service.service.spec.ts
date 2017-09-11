import { TestBed, inject } from '@angular/core/testing';

import { BordadoServiceService } from './bordado-service.service';

describe('BordadoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BordadoServiceService]
    });
  });

  it('should ...', inject([BordadoServiceService], (service: BordadoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
