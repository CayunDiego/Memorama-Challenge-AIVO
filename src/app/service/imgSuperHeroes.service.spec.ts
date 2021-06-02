import { TestBed } from '@angular/core/testing';

import { ImgSuperHeroes } from './imgSuperHeroes.service';

describe('ImgThesimpsonsService', () => {
  let service: ImgSuperHeroes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgSuperHeroes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
