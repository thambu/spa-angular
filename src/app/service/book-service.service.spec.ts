import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';

import { BookService } from './book-service.service';

import { Book } from '../models/book.model';

describe('BookService', () => {
  let injector: TestBed;
  let bookService: BookService;
  let book: Book;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });
    injector = getTestBed();
    bookService = injector.get(BookService);
    book = { id: 1, title: 'Title 1', category: 'Comedy', description: 'Description 1' };
  });

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });

  it('should return book list of 2', () => {
    const dummyBooks = [
      { id: 1, title: 'Test book1', category: 'drama', description: 'Test book1 drama description' },
      { id: 2, title: 'Test book2', category: 'comedy', description: 'Test book1 comedy description' },
    ];

    bookService.getBooks().subscribe(books => {
      expect(books).toEqual(dummyBooks);
    });
  });

  it('should add book into book list ', () => {
    const fakeResonse = null;
    bookService.addBook(book, 1).subscribe(response => {
      expect(response).toEqual(fakeResonse);
    });
  });

});
