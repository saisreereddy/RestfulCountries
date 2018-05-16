import { TestBed, inject } from '@angular/core/testing';

import { RegionServiceService } from './region-service.service';

describe('RegionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegionServiceService]
    });
  });

  it('should be created', inject([RegionServiceService], (service: RegionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
