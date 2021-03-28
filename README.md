# books_back-e2etest

This repository contains the e2e test API deploy on: https://librarya00347829back.herokuapp.com

To run the test cases locally execute:
```
npm i
npm run test
```

The following test cases are located at src/e2etest/**:

- list-book.spec.js
  - Test when the user wants to list all the books.
  - Asserts expect HTTP OK Status code and the list with at least one element, each element with id, name and author.
 
- register-book.spec.js
  - Add a new book and asserts that it was created with the rigth fields.
  - Lists books before and after the creation to assert that the size was increased by 1.
 
- not-register-book.spec.js
  - Test when the user wants to add a new book without a field.
  - Asserts that the book was not added and the request failed.
 
- edit-book.spec.js
  - Add a new book before the test start.
  - Edit the existing book and assert that the fields are correct.
  - Also test when a user wants to edit by deleting one of the fields and asserts that the book did not change
 
- delete-book.spec.js
  - Add a new book before the test start.
  - Delete the new book using the id.
  - Lists books before and after the elimination to assert that the size was decreased by 1.
 
- not-delete-book.spec.js
  - Test when the user wants to delete a book with a wrong id.
  - Lists books before and after the elimination to assert that the size is the same.
