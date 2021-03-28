const axios = require('axios');
const { expect } = require('chai');

const url = "https://librarya00347829back.herokuapp.com/books";
const book = {
    "name": "The Analyst",
    "author": "John Katzenbach"
}

describe ("When the user wants to add a book", () =>{
    before(async()=>{

        List = await axios.get(url);
        response = await axios.post(url, book);
        new_List = await axios.get(url);
        bookID = response.data.id;
        
    });

    it('Then should return OK status code',()=>{
        expect(response.status).eql(200);
    });

    it("Then it should return the added book",()=>{
        new_book = response.data;
        delete new_book['id'];
        expect(new_book).eql(book);
    });

    it("Then it should return a JSON as content type",()=>{
       expect(response.headers['content-type']).to.contain('application/json');
    });

    it("Then it should return a list with the new book", ()=>{
        expect(new_List.data.length).eql(List.data.length + 1);
    })
    
});