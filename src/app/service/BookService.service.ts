import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Book } from '../models/Book.model';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  SERVER_URL: string = "http://localhost:8080/api/";
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) { }

  getBooks() {
    return this.httpClient.get(this.SERVER_URL + 'books');
  }

  addBook(book: { id: number, title: string, category: string, description: string }, id: number) {
    book.id = id;
    return this.httpClient.post(this.SERVER_URL + 'books', book);
  }

}
