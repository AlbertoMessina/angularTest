import { TestBed } from '@angular/core/testing';

import { GreengrocerServiceService } from './greengrocer-service.service';

describe('GreengrocerServiceService', () => {
  let service: GreengrocerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreengrocerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
