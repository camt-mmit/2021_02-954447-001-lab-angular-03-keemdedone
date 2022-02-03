import { TestBed } from '@angular/core/testing';

import { StarWarSpeciesService } from './star-war-species.service';

describe('StarWarSpeciesService', () => {
  let service: StarWarSpeciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarSpeciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
