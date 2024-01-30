import { TestBed } from '@angular/core/testing';

import { AnimeCharacterService } from './anime-character.service';

describe('AnimeCharacterService', () => {
  let service: AnimeCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
