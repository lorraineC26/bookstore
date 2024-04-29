# aLittleBookstore

This project is a single-page application developed as a frontend developer test for Blazesoft. It utilizes React with Redux and Hooks, along with Next.js for Server Side Rendering, and SCSS for styling.<br/>

## 🚨 Project Migration
This project was created with `create-react-app` and has already been migrated to my anothr repo using `Next.js` to fulfill the requirement of server-side rendering. <a href="https://github.com/lorraineC26/bookstore-nextjs-migration">You can check the new project here.</a>

The new project is deployed and accessible at: [https://bookstore-nextjs-migration.vercel.app/](https://bookstore-nextjs-migration.vercel.app/).<br/>


## Getting Started

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the development server using `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.


## Features

### 0. Logo Navigation
- Clicking the logo at the top left corner of the page takes the user back to the top of the page.

### 1. Book List
- The main page displays a list of books, each showing the book name, price, category, a delete button, and an image cover.
- Users can add a new book by clicking the `Add Book button` at the top.

<p align="center">
  <img src="https://github.com/lorraineC26/bookstore-nextjs-migration/blob/main/public/02-main-page.png?raw=true" alt="Book List" width="400px" style="display: block; margin: 0 auto;">
</p>

### 2. Add Book
- Clicking the `Add Book button` opens a `popup page` allowing users to add a new book.
- Users can input the book's name, price, category, description; a default image cover is provided.
- After submition, the new book are updated in the main page

<p align="center">
  <img src="https://github.com/lorraineC26/bookstore-nextjs-migration/blob/main/public/05-add-new-book.png?raw=true" alt="add new book" width="400px" style="display: block; margin: 0 auto;">
</p>

<p align="center">
  <img src="https://github.com/lorraineC26/bookstore-nextjs-migration/blob/main/public/06-new-book.png?raw=true" alt="updated main page" width="400px" style="display: block; margin: 0 auto;">
</p>

### 3. Modify Book Details
- Clicking on a book in the list opens a popup page where users can modify the book's details.
- Users can edit the book's name, price, category and description.
- After modification, the book details are updated in the main page.

<p align="center">
  <img src="https://github.com/lorraineC26/bookstore-nextjs-migration/blob/main/public/03-book-details-popup.png?raw=true" alt="edit book" width="400px" style="display: block; margin: 0 auto;">
</p>

### 4. Delete Book
- Each book entry in the list has a delete button.
- Clicking the delete button removes the book from the main page.
- An "empty message" wil show up when all books are deleted.

<p align="center">
  <img src="https://github.com/lorraineC26/bookstore-nextjs-migration/blob/main/public/01-empty-message.png?raw=true" alt="empty booklist msg" width="400px" style="display: block; margin: 0 auto;">
</p>

### Responsive Design
- The application has a responsive design that adapts to both larger and smaller screens, providing an optimal viewing experience across devices.

<p align="center">
  <img src="https://github.com/lorraineC26/bookstore-nextjs-migration/blob/main/public/07-responsive-design.png?raw=true" alt="responsive deisgn" width="200px" style="display: block; margin: 0 auto;">
</p>

