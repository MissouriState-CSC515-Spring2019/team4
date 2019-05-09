import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from '../services/book';
import { BookService } from '../services/book.service';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'view-detail-app',
    templateUrl: './view-detail.component.html',
	styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit { 
    book: Book = new Book();
    idLoaded: Promise<boolean>;
	constructor(private route: ActivatedRoute,
	            private router: Router,
	            private bookService: BookService,
                private location: Location) { }
                
    ngOnInit(): void {
/*         if(!this.bookService.hasBooks()){
            console.log("get books:");
            this.bookService.updateBooks(parseInt(this.route.snapshot.paramMap.get('id')))
            .then(b => console.log(b));
        }
        console.log(this.bookService.hasBooks());
        this.book.title = "a";
        this.book.year = "a";
        this.book.description = "a";
        this.book.id = -1; */
        //this.bookService.updateBooks(parseInt(this.route.snapshot.paramMap.get('id')));
        
        this.bookService.getBook(parseInt(this.route.snapshot.paramMap.get('id')))
        //.then(book => console.log(book))
        .then(book => this.book = book)
        //.then(book => console.log(book));
        //this.idLoaded = Promise.resolve(true);
        /*
        this.route.params.pipe(switchMap((params: Params) =>
        this.bookService.getBook(+params['id'])))
        .subscribe(book => this.book = book);
        */
        //console.log(this.bookService.getBooks());
        //console.log(this.route.snapshot.paramMap.get('id'));
    }
    goBack(): void {
        this.location.back();
    }
}
    