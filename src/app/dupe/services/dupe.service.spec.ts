import { TestBed } from '@angular/core/testing';

import { DupeService } from './dupe.service';

describe('DupeService', () => {
  let service: DupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
