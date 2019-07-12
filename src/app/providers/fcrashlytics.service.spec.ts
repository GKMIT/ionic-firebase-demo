import { TestBed } from '@angular/core/testing';

import { FcrashlyticsService } from './fcrashlytics.service';

describe('FcrashlyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FcrashlyticsService = TestBed.get(FcrashlyticsService);
    expect(service).toBeTruthy();
  });
});
