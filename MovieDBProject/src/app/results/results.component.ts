import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';


import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
    selector: 'results-app',
    templateUrl: './results.component.html',
	styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit { 
    books: Book[];
	book: Book = new Book();
    constructor(private route: ActivatedRoute,
        private router: Router,
        private bookService: BookService) { }

    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
        //this.route.params.pipe(switchMap((params: Params) =>
        //this.bookService.getBook(+params['id'])))
        //.subscribe(book => this.book = book);
        
        
    }
    ngOnInit(): void {
        this.bookService.updateBooks(this.route.snapshot.paramMap.get('title'));
        this.getBooks();
        //console.log(this.route.snapshot.paramMap.get('title'));
    }				
}
    