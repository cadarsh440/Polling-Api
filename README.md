# Polling_API

steps to set up the application on your local machine

Installation requirements
- MongoDB and Studio 3T
- Node.js

After downloading MongoDB, connect to the MongoDB locally present on your machine from Studio 3T.
Once both the requirements are installed locally on your machine.
Download the zip file and open it in an IDE.

To start the application,

run 'nodemon start' from the terminal

----------------------------------------------------------------------

API's

GET - http://localhost:8000/questions/:id
- to the specfic question and its options along with the votes

POST - http://localhost:8000/questions/create
- Creates the question with body passed with the request (taskes only 'title' argument)

POST - http://localhost:8000/questions/:id/options/create
- creates an option from the body of the request to the associated question id passed in the URL
- takes 'text' as the body argument


POST - http://localhost:8000/options/:id/add_votes
- adds a vote to the specific option

DELETE - http://localhost:8000/options/:id/delete
- deletes the specific option from all the collections and documents containing it.

DELETE - http://localhost:8000/questions/:id/delete
- deletes the specific question from the document and all its options
