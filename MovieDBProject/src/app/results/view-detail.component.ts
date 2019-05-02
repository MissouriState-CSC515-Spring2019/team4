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
	constructor(private route: ActivatedRoute,
	            private router: Router,
	            private bookService: BookService,
                private location: Location) { }
                
    ngOnInit(): void {
        this.getBook();
    }
    getBook(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.bookService.getBook(id).then(book => this.book = book);
        //this.bookService.getBook(id).subscribe(book => this.book = book);
    }
    goBack(): void {
        this.location.back();
    }
	updateBook(id:number): void {
		this.router.navigate(['/update-book', id]);
	}
}
    