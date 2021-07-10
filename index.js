const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const PORT = 4000

const { listBookController, createBookController, updateBookController,searchBookController, deleteBookController} = require('./controllers')

const app = express('server')


const homePage = (req, res) => {
    const homepageFile = path.join(__dirname, 'public', 'index.html');
    res.sendFile(homepageFile)
}


//middlewares
app.use(bodyparser.json())

// routes

//search book
app.get('/book/search', searchBookController)

//create book
app.post('/book', createBookController)

//view book
app.get('/book', listBookController)

//update book
app.patch('/book', updateBookController)

//delete book
app.delete('/book', deleteBookController)

//get request from html
app.get('/', homePage)


app.listen(PORT, () => console.log('server ready on port:' + PORT))