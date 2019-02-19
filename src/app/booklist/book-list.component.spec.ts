import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as Material from '@angular/material/';
import { HttpClientModule } from '@angular/common/http';

import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        Material.MatToolbarModule,
        Material.MatCardModule
      ],
      declarations: [BookListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
