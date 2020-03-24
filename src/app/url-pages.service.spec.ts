import { TestBed } from '@angular/core/testing';

import { UrlPagesService } from './url-pages.service';

describe('UrlPagesService', () => {
  let service: UrlPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
