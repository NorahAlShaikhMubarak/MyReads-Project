# MyReads-Project

MyReads is a project build using React library, it demonstares React fundamentals such as state management, react-router, life cycle events

# Project Overview

MyReads is a cataloge app that shows a list of books initially showen in shelves as the following:

Currently Reading,
Want to Read, and
Read

Users can switch and move the books based on the categories.

Futhermore, the user can search by author or book name and add the books into the previous categories.

# Project breakdown:
App.js has two routers: to the list books component and the search component.
The BooksList component includes the Bookshelf component plus the search button.
Bookshelf component maps over the books component. 
The books component include the BookshelfChanger component which changes the state of the books.

The search component has the close search button, SearchBooksInput component which takes the user input
, and SearchBooksResults componen which maps the new books to the corresponding shelf.

# Installation:

$ git clone https://github.com/NorahAlShaikhMubarak/MyReads-Project.git

$ cd myreads-project

$ npm install

# Usage

Use the following command to run the browser:
npm start

The project can be viewed in the browser at:
http://localhost:3000

# Screenshots of the project running
Main page:
<img width="1123" alt="Screen Shot 2022-04-17 at 3 23 16 PM" src="https://user-images.githubusercontent.com/50755701/163790990-93beb499-2525-4940-8e2f-33f1eda1037a.png">

Search page:
<img width="1119" alt="Screen Shot 2022-04-17 at 3 22 39 PM" src="https://user-images.githubusercontent.com/50755701/163791003-bcc1b728-7069-41b2-9afb-df3b0eb1b675.png">
