import { Injectable } from '@angular/core';
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
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  public getBooks() {
        return this.httpClient.get(this.SERVER_URL + 'books');
  }

  addBook(book: {title: string, category: string, description: string}){
    console.log(book);
    return this.httpClient.post(this.SERVER_URL + 'books', book);
  }

  /*insertPlayer(player: BasketballPlayer): Observable<BasketballPlayer> {
        return this.http.post(this.playersUrl, JSON.stringify(player), { headers: this.headers })
                        .map(response => response.json() as BasketballPlayer)
                        .catch(this.handleError);
    }*/

  private handleError(response: Response): Observable<any> {
        let errorMessage = `${response.status} - ${response.statusText}`;
        return Observable.throw(errorMessage);
  }

}
