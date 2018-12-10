import { TestBed } from '@angular/core/testing';

import { MenuEnablerService } from './menu-enabler.service';

describe('MenuEnablerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuEnablerService = TestBed.get(MenuEnablerService);
    expect(service).toBeTruthy();
  });
});
