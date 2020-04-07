const express = require("express");
const router = express.Router();

const Book = require("../../models/Books");

router.post("/Addbook", (req, res) => {
  Book.findOne({isbn: req.body.isbn}).then(book => {
      if(book){
          return res.status(400).json({ msg: "Book already exists"})
      }else{
          const newBook = new Book({
              isbn: req.body.isbn,
              name: req.body.name,
              author: req.body.author,
              subject: req.body.subject
          })
              .save()
              .then(res => console.log(``))
              .catch(err => console.log(err));
      }
  })
}
);

module.exports = router;