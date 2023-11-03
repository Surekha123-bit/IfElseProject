import { TestBed } from '@angular/core/testing';

import { IfelseService } from './ifelse.service';

describe('IfelseService', () => {
  let service: IfelseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IfelseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
