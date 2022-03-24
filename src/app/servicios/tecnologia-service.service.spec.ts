import { TestBed } from '@angular/core/testing';

import { TecnologiaServiceService } from './tecnologia-service.service';

describe('TecnologiaServiceService', () => {
  let service: TecnologiaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnologiaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
