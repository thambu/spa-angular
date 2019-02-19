import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../models/book.model';
import { BookService } from '../service/book-service.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

  @Input() books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    })
  }
}
