import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
    selector: 'search-movie-app',
    templateUrl: './search-movie.component.html',
	styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit { 
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
    searchBooks(): void {
	    
        this.router.navigate(['/results', {title : this.book.title}]);
        //this.bookService.updateBooks(this.book.title);
        
    }
    onKey(event: any): void {
        if(event.key === "Enter"){
            this.searchBooks();
        }
    }
}    	

    