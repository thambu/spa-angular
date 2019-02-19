import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  SERVER_URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  getBooks() {
    return this.httpClient.get(this.SERVER_URL + 'books');
  }

  addBook(book: { id: number, title: string, category: string, description: string }, id: number) {
    book.id = id;
    return this.httpClient.post(this.SERVER_URL + 'books', book);
  }

}
