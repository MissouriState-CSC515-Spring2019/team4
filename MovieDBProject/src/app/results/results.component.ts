import { Component, OnInit } from '@angular/core';

import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
    selector: 'results-app',
    templateUrl: './results.component.html',
	styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit { 
    books: Book[];
	constructor(private bookService: BookService) { }
    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }
    ngOnInit(): void {
        this.getBooks();
    }				
}
    