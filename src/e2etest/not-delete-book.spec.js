const axios = require('axios');
const { expect } = require('chai');

const url = "https://librarya00347829back.herokuapp.com/books";

describe("When user wants to remove a book with the wrong id", () =>{

    it('Then should return a 500 status code', (done) => {
        axios.delete(`${url}/xx`).catch(function (error) {
            const status = error.response.status;
            expect(status).eql(500);
        done()
      });
    });
});