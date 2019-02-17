import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule  } from '@angular/common/http';

import { MaterialModule } from './material/material.module';

import { DataService } from './service/Data.service';

import { AppComponent } from './app.component';
import { BookComponent } from './book/Book.component';
import { BooklistComponent } from './booklist/BookList.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooklistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(DataService)
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
