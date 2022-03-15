import { TestBed } from '@angular/core/testing';

import { CellNumberGeneratorService } from './cell-number-generator.service';

describe('CellNumberGeneratorService', () => {
  let service: CellNumberGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellNumberGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
