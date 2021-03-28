const axios = require('axios');
const { expect } = require('chai');

const url = "https://librarya00347829back.herokuapp.com/books";
const book = {
    "name": "The Analyst II",
    "author": "John Katzenbach"
}

const book_wrong = {
    "name": "The Analyst II"
}

describe("Given an added book", () =>{
    before(async()=>{
        old_Book = await axios.post(url, book);
        bookID = old_Book.data.id;
    });

    describe("When the user wants to edit a book", () =>{
        before(async()=>{
            book['name'] = `${book.name} II`;
            book['author'] = `${book.author} II`;
            old_List = await axios.get(url);
            response = await axios.put(url+"/"+old_Book.data.id, book);
            new_List = await axios.get(url);
        });
        
        it("Should return OK status", ()=>{
            expect(response.status).eql(200);
        });

        it("Should return the book edited", () =>{
            book_edit = response.data;
            delete book_edit['id'];
            expect(book_edit).eql(book);
        });

        it("Should return a different book", () =>{
            book_edit = response.data;
            delete book_edit['id'];
            expect(book_edit).not.eql(old_Book.data);
        })

        it("Should return a list with the same length", () =>{
            expect(new_List.data.length).eql(old_List.data.length);
        });

    });

    describe("When the user wants to edit a book without a field - Negative case", () =>{

        it('Then should return a 500 status code', (done) => {
            axios.put(url+"/"+old_Book.data.id, book_wrong).catch(function (error) {
                const status = error.response.status;
                expect(status).eql(500);
            done()
          });
        });
        
        
    });

});