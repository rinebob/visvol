import { TestBed } from '@angular/core/testing';

import { PositionBuilderService } from './position-builder.service';

describe('PositionConfigBuilderService', () => {
  let service: PositionBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositionBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
