
const express = require("express");

const app=new express();
const normalUserRouter=express.Router();
const bookData=require("../model/bookData");
const authorData=require("../model/authorData");

function router(nav,navNormal)
{ 
    normalUserRouter.get('/',(req,res)=>
    {
     bookData.find()
     .then((books)=>
                  {
                    nav=navNormal
                    res.render('normalUserBooksView',
                    {
                        nav,  
                        books
                  });
                  })  
    });
    normalUserRouter.get('/userAuthorView',(req,res)=>
    {
     authorData.find()
     .then((authors)=>
                  {
                    nav=navNormal
                    res.render('normalUserAuthorView',
                    {
                        nav,  
                        authors
                  });
                  })  
    });
    normalUserRouter.get('/:id',(req,res)=>
                              {
                                const id=req.params.id;
                                authorData.findOne({_id:id})
                                .then((author)=>
                                {
                                  nav=navNormal;
                                  res.render('author',
                                  {
                                    nav,
                                    author
                                  });
                                });
                              });
    return normalUserRouter;
}

module.exports=router;
