import { TestBed } from '@angular/core/testing';

import { EducaciónService } from './educación.service';

describe('EducaciónService', () => {
  let service: EducaciónService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducaciónService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
