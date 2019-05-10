import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { isUndefined } from 'util';

@Injectable()
export class BookService {
    [x: string]: any;
    getAPIKey(): String{
        //Add your API key here.
        return 'api key';
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

	async getBook(id: number): Promise<Book> {
        //console.log(!BOOKS.some(book => book.id === id));
/*         if( !BOOKS.some(book => book.id === id)){
                console.log("updating books: ")
                this.updateBooks(id);
                console.log("updated:");
            } */
        return await this.getBooks()
            .then(async books => {if(!books.some(book => book.id === id)){
                //console.log("1");
                return await this.updateBooks(id);
            }else{
                //console.log("2");
                return books.find(book => book.id == id);
            }})
            .then(book =>{
                //console.log(book); 
                return book;
            });
            //.then(books => books.find(book => book.id == id));
    }

    updateBooks(id: number): Promise<Book>;
    updateBooks(title: string): Promise<Book>;
    updateBooks(paramOne: string | number): Promise<Book>{
        //fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=')
        let searchStr: string;
        if (typeof paramOne === 'number'){
            //this.clearList();
            searchStr = 'https://api.themoviedb.org/3/movie/' + paramOne + '?api_key=' + this.getAPIKey();
        } else {
            this.clearList();
            searchStr = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.getAPIKey() + '&query=' + paramOne;
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
                if(typeof paramOne === 'number'){
                    //console.log(this.newbook);
                    return Promise.resolve(this.newbook);
                    //return newbook;
                }
                //this.addBook(newbook);
                //this.getBooks().then(books => console.log(books.length));
            });
            //return BOOKS[0];
        });
        return Promise.resolve(BOOKS[0]);
        //console.log(this.getBooks()[0]);
        //return this.getBooks()[0];
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
