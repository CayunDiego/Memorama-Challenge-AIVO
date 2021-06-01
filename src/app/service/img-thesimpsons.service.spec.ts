import { TestBed } from '@angular/core/testing';

import { ImgThesimpsonsService } from './img-thesimpsons.service';

describe('ImgThesimpsonsService', () => {
  let service: ImgThesimpsonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgThesimpsonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
