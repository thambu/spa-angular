import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Material from '@angular/material/';
import { HttpClientModule } from '@angular/common/http';

import { BookComponent } from './book.component';
import { BookListComponent } from '../booklist/book-list.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        Material.MatFormFieldModule,
        Material.MatInputModule,
        Material.MatSelectModule,
        Material.MatToolbarModule,
        Material.MatCardModule
      ],
      declarations: [
        BookComponent,
        BookListComponent
      ]
    });
    // create component and test fixture
    fixture = TestBed.createComponent(BookComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.bookForm.valid).toBeFalsy();
  });

  it('title field validity', () => {
    let errors = {};
    let title = component.bookForm.controls['title'];

    // Title field is required
    errors = title.errors || {};
    expect(errors['required']).toBeTruthy();

  });

  it('category field validity', () => {
    let errors = {};
    let category = component.bookForm.controls['category'];

    // Category field is required
    errors = category.errors || {};
    expect(errors['required']).toBeTruthy();

  });

  it('description field validity', () => {
    let errors = {};
    let description = component.bookForm.controls['description'];

    // Description field is required
    errors = description.errors || {};
    expect(errors['required']).toBeTruthy();

  });

  it('form should be valid', async(() => {
    component.bookForm.controls['title'].setValue('Mr');
    component.bookForm.controls['category'].setValue('drama');
    component.bookForm.controls['description'].setValue('testDescrition');
    expect(component.bookForm.controls).toBeTruthy();
  }));

});
