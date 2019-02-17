import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

import { Book } from '../models/Book.model';
import { BookService } from '../service/BookService.service';

@Component({
  selector: 'app-book',
  templateUrl: './Book.component.html',
  styleUrls: ['./Book.component.css']
})
export class BookComponent implements OnInit {

  bookForm: FormGroup;
  submitted = false;
  books: any[]= [];
  id: number = 1;

  constructor(private formBuilder: FormBuilder, private bookService: BookService) { }

  ngOnInit() {
        this.bookForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.maxLength(30)]],
            category: ['', Validators.required],
            description: ['', [Validators.required]]
        });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.bookForm.controls[controlName].hasError(errorName);
  }

  addBook(){
      if(this.bookForm.valid) {
      console.log(this.bookForm.value);
      return this.bookService.addBook(this.bookForm.value, this.id).subscribe (data=> {
          this.getBooks();
      });
     }
    }

  getBooks() {
   this.bookService.getBooks().subscribe((data : Book[])=>{
        console.log(data);
        this.books = data;
        this.id = data.length + 1;
    })
  }
}
