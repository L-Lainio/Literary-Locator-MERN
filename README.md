# Literary-Locator-MERN by Lora Lainio
# MERN Challenge: Book Search Engine (Mod #21)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Lora-Lainio-4baaaa.svg)](code_of_conduct.md)

## Table of Contents

 * [Description](#description)

 * [Mock-up](#mock-up)

 * [Live-URL-of-Deployed-Application](#live-url-of-deployed-application)

 * [Live-Screen-Recording-of-Application-Functionality](#live-screen-recording-of-application-functionality)

 * [Screenshots](#screenshots)

 * [Technologies-Used](#technologies-used)

 * [Credits](#credits)

 * [Features](#features)

 * [Usage-Information](#usage-information)

 * [Contribution-Guidelines](#contribution-guidelines)

 * [Test-Instructions](#test-instructions)

 * [License](#license)

 * [Questions](#questions)

## Description
Most modern websites are driven by two things: data and user demands. This shouldn't come as a surprise, as the ability to personalize user data is the cornerstone of real-world web development today. And as user demands evolve, applications need to be more performant.

MERN Challenge: Book Search Engine
This week, you'll take a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end.

To fulfill the Challenge, you’ll need to do the following:

Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

Modify the existing authentication middleware so that it works in the context of a GraphQL API.

Create an Apollo Provider so that requests can communicate with an Apollo Server.

Deploy the application to Render.

## Mock-Up
Let's start by revisiting the web application's appearance and functionality.

As you can see in the following animation, a user can type a search term (in this case, "star wars") in a search box and the results appear:

## Live URL of Deployed Application

Deployed on render:

https://literary-locator-mern.onrender.com

## My GIF
![]()

## My Screenshot

Let's start by revisiting the web application's appearance and functionality.

As you can see in the following animation, a user can type a search term (in this case, "star wars") in a search box and the results appear:
![]()

The user can save books by clicking "Save This Book!" under each search result, as shown in the following animation:
![]()

A user can view their saved books on a separate page, as shown in the following animation:
![]()


## Back-End Specifications
The back-end specifications for the MERN Book Search Engine project involve updating various files to work with a GraphQL API. Here is a summary of the tasks to be completed in each of the back-end files:

auth.js:

Update the auth middleware function to work with the GraphQL API.
server.js:

Implement the Apollo Server and apply it to the Express server as middleware.
Schemas directory:

index.js:
Export your typeDefs and resolvers.
resolvers.js:
Define the query and mutation functionality to work with the Mongoose models. You can use the user-controller.js functionality as a guide.
typeDefs.js:
Define the necessary Query and Mutation types:
Query type:
me: Returns a User type.
Mutation type:
login: Accepts an email and password as parameters; returns an Auth type.
addUser: Accepts a username, email, and password as parameters; returns an Auth type.
saveBook: Accepts book details such as author's array, description, title, bookId, image, and link as parameters; returns a User type. Consider creating an input type to handle these parameters efficiently.
removeBook: Accepts a book's bookId as a parameter; returns a User type.
User type:
_id
username
email
bookCount
savedBooks (an array of the Book type)
Book type:
bookId
authors (an array of strings)
description
title
image
link
Auth type:
token
user (references the User type)


## Front-End Specifications
The front-end specifications for the MERN Book Search Engine project involve creating and updating various front-end files. Here is a summary of the tasks to be completed in each of the front-end files:

queries.js:

Define the GET_ME query to execute the me query set up using Apollo Server.
mutations.js:

Define the following mutations:
LOGIN_USER: Executes the loginUser mutation set up using Apollo Server.
ADD_USER: Executes the addUser mutation.
SAVE_BOOK: Executes the saveBook mutation.
REMOVE_BOOK: Executes the removeBook mutation.
App.jsx:

Create an Apollo Provider to make every request work with the Apollo server.
SearchBooks.jsx:

Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation in the handleSaveBook() function instead of the saveBook() function imported from the API file.
Ensure the logic for saving the book's ID to state is kept within the try...catch block.
SavedBooks.jsx:

Remove the useEffect() Hook that sets the state for UserData.
Use the useQuery() Hook to execute the GET_ME query on load and save it to a variable named userData.
Use the useMutation() Hook to execute the REMOVE_BOOK mutation in the handleDeleteBook() function instead of the deleteBook() function imported from the API file. Make sure to keep the removeBookId() function in place.
SignupForm.jsx:

Replace the addUser() functionality imported from the API file with the ADD_USER mutation functionality.
LoginForm.jsx:

Replace the loginUser() functionality imported from the API file with the LOGIN_USER mutation functionality.

## Technologies-Used
Has an Apollo Server that uses GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

Use an Apollo Server and apply it to the Express.js server as middleware.

Include schema settings for resolvers and typeDefs as outlined in the Challenge instructions.

Modify the existing authentication middleware to work in the context of a GraphQL API.

Use an Apollo Provider so that the application can communicate with the Apollo Server.

Application must be deployed to Render.

## Credits

Much of this application followed outline code found within the week 11 class activities.

## Features

Features of this application include the users ability to retrieve and save notes from/to a mock database.json file which will persist on page load unless deleted.

## Usage Information

This application is powered by Express meaning for it to function properly, there needs to be a server running in the background. To start the server, navigate to the directory of the application, install all dependencies (npm i), then type the command npm start (or node index.js). A message should then display in the command line saying "App listening at http://localhost:3001 🚀". Once the server is running, then navigate to the front end of the application directly from the command line by holding command and clicking the link http://localhost:3001. From there, users can pull up any existing notes saved to the database or create new notes, which once saved will be pushed to the database and persisted.

## Contribution Guidelines

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.

## Test Instructions



## License

NOTICE: This application is covered under the MIT License


