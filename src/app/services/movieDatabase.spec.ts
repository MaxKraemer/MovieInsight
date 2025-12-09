import { TestBed } from '@angular/core/testing';

import { Database } from './movieDatabase';

describe('Database', () => {
  let service: Database;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Database);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
