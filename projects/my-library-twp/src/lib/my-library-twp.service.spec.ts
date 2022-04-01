import { TestBed } from '@angular/core/testing';

import { MyLibraryTwpService } from './my-library-twp.service';

describe('MyLibraryTwpService', () => {
  let service: MyLibraryTwpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibraryTwpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
