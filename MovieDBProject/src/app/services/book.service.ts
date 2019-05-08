import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { isUndefined } from 'util';

@Injectable()
export class BookService {
    [x: string]: any;
    getBooks(): Promise<Book[]> {
        return Promise.resolve(BOOKS);
    }
	addBook(book:Book): void {
		this.getBooks().then(books => {
            books.push(book);
        });
    }
    clearList(): void{
        this.getBooks().then(books =>{
            books.length = 0;
        })
    }
	getBook(id: number): Promise<Book> {
        console.log(!BOOKS.some(book => book.id === id));
        if( !BOOKS.some(book => book.id === id)){
                this.updateBooks(id);
            }
        return this.getBooks()
            .then(books => books.find(book => book.id === id));
    }
    updateBooks(id: number): void;
    updateBooks(title: string): void;
    updateBooks(paramOne: string | number): void{
        //console.log(id);
        //fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=b4e202cf5f6d8493a5305fd6d464b281')
        let searchStr: string;
        if (typeof paramOne === 'number'){
            searchStr = 'https://api.themoviedb.org/3/movie/' + paramOne + '?api_key=b4e202cf5f6d8493a5305fd6d464b281';
        } else {
            searchStr = 'https://api.themoviedb.org/3/search/movie?api_key=b4e202cf5f6d8493a5305fd6d464b281&query=' + paramOne;
        }
        fetch(searchStr)
        .then(response => {
            //catch server 500 error here
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            this.clearList();
            data.results.forEach(element => {
                //construct book data from resulting data
                let newbook = new Book();
                newbook.title = element.title;
                newbook.id = element.id;
                //newbook.director = 
                newbook.year = element.release_date;
                newbook.description = element.overview;
                this.addBook(newbook);
            });
        });
    }


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