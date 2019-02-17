import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../models/Book.model';
import { BookService } from '../service/BookService.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './BookList.component.html',
  styleUrls: ['./BookList.component.css']
})
export class BooklistComponent implements OnInit {

  @Input() books: any[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((data : any[])=>{
        console.log(data);
        this.books = data;
    })
  }
}