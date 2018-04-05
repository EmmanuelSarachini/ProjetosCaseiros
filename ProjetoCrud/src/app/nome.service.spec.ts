import { TestBed, inject } from '@angular/core/testing';

import { NomeService } from './nome.service';

describe('NomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NomeService]
    });
  });

  it('should be created', inject([NomeService], (service: NomeService) => {
    expect(service).toBeTruthy();
  }));
});
