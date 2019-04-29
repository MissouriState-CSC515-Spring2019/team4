import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

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
	/** getBook(id: number): Promise<Book> {
        return this.getBooks()
            .then(books => books.find(book => book.id === id));
    }*/
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