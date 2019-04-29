import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
    selector: 'manage-book-app',
    templateUrl: './manage-book.component.html',
	styleUrls: ['./manage-book.component.css']
})
export class ManageBookComponent implements OnInit { 
    books: Book[];
	book: Book = new Book();
	constructor(private router: Router,
	            private bookService: BookService) { }
    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }
    ngOnInit(): void {
        this.getBooks();
    }
	updateBook(id:number): void {
		this.router.navigate(['/update-book', id]);
	}
	/** deleteBook(id:number): void {
		this.bookService.deleteBook(id);
	}*/
}
    