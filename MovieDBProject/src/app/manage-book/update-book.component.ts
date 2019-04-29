import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from '../services/book';
import { BookService } from '../services/book.service';
import { switchMap } from 'rxjs/operators';
@Component({
    selector: 'update-book-app',
    templateUrl: './update-book.component.html',
	styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit { 
	book: Book = new Book();
	constructor(private route: ActivatedRoute,
	            private bookService: BookService,
				private location: Location) { }
                
    ngOnInit(): void {
        
    }
    
    goBack(): void {
        this.location.back();
    }
}
    