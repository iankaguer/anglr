import { TestBed } from '@angular/core/testing';

import { FormulaireserviceService } from './formulaireservice.service';

describe('FormulaireserviceService', () => {
  let service: FormulaireserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulaireserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
