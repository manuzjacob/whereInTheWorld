import { TestBed } from '@angular/core/testing';

import { CountryserviseService } from './country.service';

describe('CountryserviseService', () => {
  let service: CountryserviseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryserviseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
