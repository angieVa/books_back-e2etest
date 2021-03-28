const axios = require('axios');
const { expect } = require('chai');
const chai = require('chai');

const url = "https://librarya00347829back.herokuapp.com/books";
const book = {
    "name": "Doctor Sleep",
    "author": "Stephen King"
}

describe("Given an added book", () =>{
    before(async ()=>{
        book_added = await axios.post(url,book);
        
    });

    describe("When the user wants to remove an existing book", () =>{
        before(async () =>{
            old_Books = await axios.get(url);
            response = await axios.delete(`${url}/${book_added.data.id}`);
            new_Books = await axios.get(url);
        });

        it("Should return OK satus code", () =>{
            expect(response.status).eql(200);
        })

        it("The book should not exist in the list", () =>{
            expect(new_Books.data).not.contain(book_added.data);
        })

        it("The size of the new list should be smaller", () =>{
            expect(new_Books.data.length).eql(old_Books.data.length-1);
        })
    })
})