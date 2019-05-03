import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
    selector: 'results-app',
    templateUrl: './results.component.html',
	styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit { 
    books: Book[];
    constructor(private route: ActivatedRoute,
        private bookService: BookService) { }
    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);

        const searchstr = +this.route.snapshot.paramMap.get('searchstr');
        console.log(searchstr);
    }
    ngOnInit(): void {
        this.getBooks();
    }				
}
    