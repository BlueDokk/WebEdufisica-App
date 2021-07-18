import { TestBed } from '@angular/core/testing';

import { Articles.ServiceService } from './articles.service';

describe('Articles.ServiceService', () => {
  let service: Articles.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Articles.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
