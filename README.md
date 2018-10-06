# MyReads Project

Using Udacity's starter code, the purpose of this project is to create a functional interactive reading list using React. The goal of the Udacity template is to save time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. The purpose of this task is to add interactivity to the app by refactoring the static code in this template.


## To Start The Application

<!-- * install all project dependencies with `npm install` -->
* clone or [download](https://github.com/stealing-pencils/reactnd-project-myreads/archive/master.zip) this repository
* using your terminal (or equivalent), cd into the directory that this application can be found in  
* run `npm install` to install the project dependencies
* start the application by inputting `npm start`
* the App can be viewed in your preferred browser at `localhost:3000`


## The Application Includes

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├   │
    │   ├── MainPage.js # Home Page for App
    │   │    │
    │   │    └──Shelves.js ────   # Creates shelves for MainPage
    │   │                       │
    │   │                       ├──  Books.js # UI for each book
    │   │                       │
    │   └── SearchBooks.js ────   # Search Book page and search input
    │
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


## Backend Server

To simplify the development process, Udacity provided a backend server for development. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.


## Contributing

The starter code was provided by Udacity.
I used the help of:
* [EMEA MyReads (Maeva) Walk-Thru  -  YouTube](https://www.youtube.com/watch?v=i6L2jLHV9j8)
* [Webinar: MyReads (P6 SHORT) Sept-22 walk-thru with @RyanWaite.ProjectCoach](https://www.youtube.com/watch?v=N8bU1oWlLwY&feature=youtu.be)
* Troubleshooting assistance from StackOverflow and the Udacity Mentors and Community




For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
