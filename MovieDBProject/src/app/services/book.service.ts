import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { Observable, of } from 'rxjs';

@Injectable()
export class BookService {
    getBooks(): Promise<Book[]> {
        return Promise.resolve(BOOKS);
    }
	addBook(book:Book): void {
		this.getBooks().then(books => {
			books.push(book);}
		);
    }
	async getBook(id: number): Promise<Book> {
        const books = await this.getBooks();
        return books.find(book => book.id === id);
    } 
/*     getBook(id: number): Observable<Book> {
        //const id = +this.route.snapshot.paramMap.get('id');
        return of(BOOKS.find(book => book.id === id));
    } */
    /** 
	deleteBook(id: number): void {
		this.getBooks().then(books => {
		    let book = books.find(ob => ob.id === id);
            let bookIndex = books.indexOf(book);
            books.splice(bookIndex, 1);}
		);
    }
    */
}