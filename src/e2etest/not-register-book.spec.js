const axios = require('axios');
const { expect } = require('chai');

const url = "https://librarya00347829back.herokuapp.com/books";

const book_wrong = {
    "name": "The Analyst"
}

describe("When the user wants to add a book without a field", () =>{

    it('Then should return a 500 status code', (done) => {

        axios.post(url, book_wrong).catch(function (error) {
            const status = error.response.status;
            expect(status).eql(500);
        done()

      });
    });
    
});