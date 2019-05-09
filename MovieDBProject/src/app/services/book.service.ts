import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { isUndefined } from 'util';

@Injectable()
export class BookService {
    [x: string]: any;
    hasBooks(): boolean {
        return BOOKS.length > 0;
    }
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
        //console.log(!BOOKS.some(book => book.id === id));
/*         if( !BOOKS.some(book => book.id === id)){
                console.log("updating books: ")
                this.updateBooks(id);
                console.log("updated:");
            } */
        return this.getBooks()
            .then(books => {if(!books.some(book => book.id === id)){
                return this.updateBooks(id);
            }else{
                return books;
            }})
            .then(books => {
                //console.log(books);
                //console.log(typeof(id) + id);
                //console.log(typeof(books[0].id) + books[0].id)
                //console.log(books.find(book => book.id === id));
                return books;
            })
            .then(books => {
                //console.log("test");
                return books.find(book => book.id === id)})
            .then(book => {if(book){
                //console.log(book);
                return book;
            }});
    }

    updateBooks(id: number): Promise<Book[]>;
    updateBooks(title: string): Promise<Book[]>;
    updateBooks(paramOne: string | number): Promise<Book[]>{
        //console.log(id);
        //fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=b4e202cf5f6d8493a5305fd6d464b281')
        let searchStr: string;
        if (typeof paramOne === 'number'){
            //this.clearList();
            searchStr = 'https://api.themoviedb.org/3/movie/' + paramOne + '?api_key=b4e202cf5f6d8493a5305fd6d464b281';
        } else {
            this.clearList();
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
            //console.log(data);
            if(typeof paramOne === 'number'){
                data ={"results": [data]};
                //console.log(data2);
                //data = data2;
            }
            //this.clearList();
            data.results.forEach(element => {
                //construct book data from resulting data
                let newbook = new Book();
                newbook.title = element.title;
                newbook.id = element.id;
                //newbook.director = 
                newbook.year = element.release_date;
                newbook.description = element.overview;
                //console.log(newbook);
                this.addBook(newbook);
                //this.addBook(newbook);
                //this.getBooks().then(books => console.log(books.length));
            });
        });
        //return Promise.resolve(BOOKS);
        return this.getBooks();
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