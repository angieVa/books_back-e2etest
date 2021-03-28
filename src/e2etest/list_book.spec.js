const axios = require('axios');
const { expect } = require('chai');

let response;

const url = 'https://librarya00347829back.herokuapp.com/books';

describe("When the user wants to list all the books", () => {
    before(async() => {
        response = await axios.get(url);
    });

    it("Then it should return an OK status code",()=>{
        expect(response.status).eql(200);
    });

    it("Then it should return a list with at least one element and with id, name and author", ()=>{
        
        book = response.data
        expect(book.length).to.be.greaterThan(0);
        book = response.data[0];
        expect(book).to.have.property("id");
        expect(book).to.have.property("name");
        expect(book).to.have.property("author");

    })
});