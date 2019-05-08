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
    addBook(): void {
	    
        this.router.navigate(['/results', {title : this.book.title}]);
        this.bookService.updateBooks(this.book.title);
        /*
        fetch('https://api.themoviedb.org/3/search/movie?api_key=b4e202cf5f6d8493a5305fd6d464b281&query=' + this.book.title)
        .then(response => {
            //catch server 500 error here
            if(!response.ok){
                throw new Error(response.statusText);
            }
            //console.log(response);
            //console.log(response);
            return response.json();
        })
        .then(data => {
            //console.log(data);
            this.bookService.clearList();
            data.results.forEach(element => {
                //console.log(element);
                let newbook = new Book();
                newbook.title = element.title;
                newbook.id = element.id;
                //newbook.director = 
                newbook.year = element.release_date;
                newbook.description = element.overview;
                this.bookService.addBook(newbook);
            });
        });*/
    }
    onKey(event: any): void {
        if(event.key === "Enter"){
            this.addBook();
        }
    }
}    	

    