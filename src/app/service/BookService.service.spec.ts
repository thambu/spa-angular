import { TestBed } from '@angular/core/testing';

import { BookServiceService } from './BookService.service';

describe('BookServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookServiceService = TestBed.get(BookServiceService);
    expect(service).toBeTruthy();
  });
});
