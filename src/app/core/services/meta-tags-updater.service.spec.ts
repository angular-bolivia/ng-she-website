import { TestBed } from '@angular/core/testing';

import { MetaTagsUpdaterService } from './meta-tags-updater.service';

describe('MetaTagsUpdaterService', () => {
  let service: MetaTagsUpdaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaTagsUpdaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
