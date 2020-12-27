const express = require("express");

const app = new express();
const authorRouter = express.Router();
const authorData = require('../model/authorData');

function router(nav, navAdmin) {

  authorRouter.get('/', (req, res) => {
    nav = navAdmin;
    authorData.find()
      .then((authors) => {
        res.render('authors',
          {
            nav,
            authors
          });
      })
  });

  authorRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    authorData.findOne({ _id: id })
      .then((author) => {
        nav = navAdmin;
        res.render('author',
          {
            nav,
            author
          });
      });
  });
  authorRouter.get("/editAuthor/:id", (req, res) =>    //sends details of the selected Author to the edit page
  {
    const id = req.params.id;
    authorData.findOne({ _id: id })
      .then((author) => {
        nav = navAdmin;
        res.render('editAuthor',
          {
            nav,
            author
          });
      })
  });

  return authorRouter;
}

module.exports = router;
