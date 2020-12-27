//handles Books data fetch and Books pages renderings

const express = require("express");
const app = new express();
const booksRouter = express.Router();
const bookData = require("../model/bookData");

function router(nav, navAdmin) {
  booksRouter.get('/', (req, res) =>       //renders books page
  {
    bookData.find()
      .then((books) => {
        nav = navAdmin;
        res.render('books',
          {
            nav,
            books
          });
      })
  });

  booksRouter.get("/:id", (req, res) =>     //fetches details of selected book
  {
    const id = req.params.id;
    bookData.findOne({ _id: id })
      .then((book) => {
        nav = navAdmin;
        res.render('book',
          {
            nav,
            book
          });
      })
  });

  booksRouter.get("/editBook/:id", (req, res) =>    //sends details of the selected book to the edit page
  {
    const id = req.params.id;
    bookData.findOne({ _id: id })
      .then((book) => {
        nav = navAdmin;
        res.render('editBook',
          {
            nav,
            book
          });
      })
  });
  return booksRouter;
}
module.exports = router;
