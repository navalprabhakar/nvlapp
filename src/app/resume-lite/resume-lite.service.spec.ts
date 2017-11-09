import { TestBed, inject } from '@angular/core/testing';

import { ResumeLiteService } from './resume-lite.service';

describe('ResumeLiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumeLiteService]
    });
  });

  it('should be created', inject([ResumeLiteService], (service: ResumeLiteService) => {
    expect(service).toBeTruthy();
  }));
});
