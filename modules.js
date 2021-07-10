//import database
let bookDb = require('./db')

//bank model

class BookModel{
    constructor({title, author, desc, publisher, YOP}){
        this.title = title;
        this.author = author;
        this.desc = desc;
        this.publisher = publisher,
        this.YOP = YOP
    }

    //method to retrieve data from the database
    static all(){
        return bookDb
    }
    //create data
    save(){
        bookDb.push(this)
        return this
    }
    //update database
    static update(updatedBook = {}){
        bookDb = bookDb.map(book => {
            if(book.author === updatedBook.author){
                return {...book, ...updatedBook}
            }
            return book;
        })
    }
    //search/find book
    static search({title}){
        let foundBook = null;
        bookDb.map(book => {
            if(book.title === title){
                console.log('book found')
                foundBook = book
            }
            else{
                console.log('book does not exist')
            }
        })
        return foundBook
    }

    //delete book
    static delete({author}){
        let deletedBook = null
        //update the database with undeleted data
        bookDb = bookDb.filter((books) => {
            if(books.author !== author){
                true
            }
            deletedBook = books;
            return false;
        })
        return deletedBook
    }
}

module.exports = BookModel;