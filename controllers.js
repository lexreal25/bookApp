    const BookModel = require('./modules')

//controllers

const listBookController = (req, res) => {
    //list all available books
    const books = BookModel.all();
    res.json({message: 'Books available', data: books})
}

//create books
const createBookController = (req, res) => {
    const { title, author, desc , publisher, YOP} = req.body
    //bookdModel instance
    const books = new BookModel({title, author, desc, publisher, YOP})
    books.save() 
    res.json({message:`${books.title} created successfuly`, data:books})
}

//update book
const updateBookController = (req, res) => {
    const { title, author, desc , publisher, YOP} = req.body;
    const updatedBook = BookModel.update({
        title,
        author,
        desc,
        publisher,
        YOP
    })
    //update books
    res.json({message:'updated successfully', data: updatedBook})
}

//search book
const searchBookController = (req, res)=> {
    const { title } = req.body;
    const foundBook = BookModel.search({title});
    res.json({data: foundBook})
}

//delete book
const deleteBookController = (req, res) => {
    const { author } = req.body;
    const deletedBook = BookModel.delete({author});
    res.json({message:`Book by ${author} is deleted`, data: deletedBook})
}

module.exports = {
    listBookController,
    createBookController,
    updateBookController,
    searchBookController,
    deleteBookController
}