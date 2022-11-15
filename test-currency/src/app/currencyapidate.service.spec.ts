import { TestBed } from '@angular/core/testing';

import { CurrencyapidateService } from './currencyapidate.service';

describe('CurrencyapidateService', () => {
  let service: CurrencyapidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyapidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
